// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%wrapforvaliditeratorprototype%.next
description: >
  %WrapForValidIteratorPrototype%.next returns the result of the underlying
  next method as is, without reading its properties or checking its type
info: |
  %WrapForValidIteratorPrototype%.next ( )

  1. Let obj be this value.
  2. Perform ? RequireInternalSlot(obj, [[Iterated]]).
  3. Let iteratorRecord be obj.[[Iterated]].
  4. Return ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]]).
includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let gets = [];
let result = {
  get done() {
    gets.push("done");
    return false;
  },
  get value() {
    gets.push("value");
    return 1;
  },
};

let wrapper = Iterator.from({
  next() {
    return result;
  },
});

assert.sameValue(wrapper.next(), result, "the same object is returned");
assert.compareArray(gets, [], "done and value are not read");

wrapper = Iterator.from({
  next() {
    return 5;
  },
});

assert.sameValue(wrapper.next(), 5, "a non-object result is returned as is");
