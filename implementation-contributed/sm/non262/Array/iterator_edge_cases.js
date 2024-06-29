// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- non262-Array-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Test that we can't confuse %ArrayIteratorPrototype% for an
// ArrayIterator object.
function TestArrayIteratorPrototypeConfusion() {
    var iter = [][Symbol.iterator]();
    assertThrowsInstanceOfWithMessage(
        () => iter.next.call(Object.getPrototypeOf(iter)),
        TypeError,
        "next method called on incompatible Array Iterator");
}
TestArrayIteratorPrototypeConfusion();

// Tests that we can use %ArrayIteratorPrototype%.next on a
// cross-compartment iterator.
function TestArrayIteratorWrappers() {
    var iter = [][Symbol.iterator]();
    assert.deepEqual(iter.next.call(newGlobal().eval('[5][Symbol.iterator]()')),
		 { value: 5, done: false })
}
TestArrayIteratorWrappers();

// Tests that calling |next| on an array iterator after iteration has finished
// doesn't get the array's |length| property.
function TestIteratorNextGetLength() {
  var lengthCalledTimes = 0;
  var array = {
    __proto__: Array.prototype,
    get length() {
      lengthCalledTimes += 1;
      return {
        valueOf() {
          return 0;
        }
      };
    }
  };
  var it = array[Symbol.iterator]();
  it.next();
  it.next();
  assert.sameValue(1, lengthCalledTimes);
}
TestIteratorNextGetLength();


