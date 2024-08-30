// Copyright (C) 2024 Sosuke Suzuki. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  %WrapForValidIteratorPrototype%.return() call base iterator's return method when it exists.
info: |
  %WrapForValidIteratorPrototype%.return ( )
    5. Let returnMethod be ? GetMethod(iterator, "return").
    6. If returnMethod is undefined, then
      ...
    7. Return ? Call(returnMethod, iterator).

includes: [deepEqual.js]
features: [iterator-helpers]
flags: []
---*/

let returnCallCount = 0;
const iter = {
    return () {
        returnCallCount++;
        return { value: 5, done: true };
    },
};
const wrapper = Iterator.from(iter);

assert.deepEqual(wrapper.return(), { value: 5, done: true });
assert.sameValue(returnCallCount, 1);
