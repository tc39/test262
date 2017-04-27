// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
    `pending` property descriptor
info: >
    RegExp.prototype.dotAll is an accessor property whose set accessor
    function is undefined.
features: [regexp-dotall]
---*/

var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'dotAll');

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
