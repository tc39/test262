// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.anySettled` invoked on a non-constructor value
esid: sec-promise-anysettled
info: |
    [...]
    6. Let promiseCapability be NewPromiseCapability(C).
    7. ReturnIfAbrupt(promiseCapability).

    25.4.1.5 NewPromiseCapability ( C )

    1. If IsConstructor(C) is false, throw a TypeError exception.
features: [Promise.anySettled]
---*/

assert.throws(TypeError, function() {
  Promise.anySettled.call(eval);
});
