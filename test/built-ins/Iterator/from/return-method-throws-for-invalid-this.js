// Copyright (C) 2024 Sosuke Suzuki. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  %WrapForValidIteratorPrototype%.return() requires [[iterated]] internal slot
info: |
  %WrapForValidIteratorPrototype%.return ( )
    ...
    2. Perform ? RequireInternalSlot(O, [[Iterated]]).

features: [iterator-helpers]
flags: []
---*/

const iter = {};
const WrapForValidIteratorPrototype = Object.getPrototypeOf(Iterator.from(iter));

assert.throws(TypeError, function() {
    WrapForValidIteratorPrototype.return.call({});
});

let returnCallCount = 0;
assert.throws(TypeError, function() {
    WrapForValidIteratorPrototype.return.call({
      return () {
        returnCallCount++;
        return { value: 5, done: true };
      }
    });
});
assert.sameValue(returnCallCount, 0);
