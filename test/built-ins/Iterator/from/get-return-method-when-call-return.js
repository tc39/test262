// Copyright (C) 2024 Sosuke Suzuki. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  Gets the base iterator return method when the wrapper return method is called.
info: |
  %WrapForValidIteratorPrototype%.return ( )
    ...
    5. Let returnMethod be ? GetMethod(iterator, "return").

features: [iterator-helpers]
flags: []
---*/

let returnGetCount = 0;
const iter = {
    get return() {
        returnGetCount++;
        return function () {
            return { value: 5, done: true };
        };
    },
};
const wrapper = Iterator.from(iter);
assert.sameValue(returnGetCount, 0);

wrapper.return();
assert.sameValue(returnGetCount, 1);
