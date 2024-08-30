// Copyright (C) 2024 Sosuke Suzuki. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  %WrapForValidIteratorPrototype%.return() should return an iterator result object that value is undefined when base object does not have return method.
info: |
  %WrapForValidIteratorPrototype%.return ( )
    ...
    5. Let returnMethod be ? GetMethod(iterator, "return").
    6. If returnMethod is undefined, then
      a. Return CreateIterResultObject(undefined, true).

includes: [deepEqual.js]
features: [iterator-helpers]
flags: []
---*/

const iter = {};
const wrapper = Iterator.from(iter);

assert.deepEqual(wrapper.return(), { value: undefined, done: true });
