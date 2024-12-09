// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

const ThrowTypeError = function(){
    "use strict";
    return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}();

assert.deepEqual(Object.getOwnPropertyDescriptor(ThrowTypeError, "length"), {
    value: 0, writable: false, enumerable: false, configurable: false
});

assert.sameValue(Object.isFrozen(ThrowTypeError), true);

