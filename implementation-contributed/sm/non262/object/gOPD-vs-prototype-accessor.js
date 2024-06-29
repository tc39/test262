// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assert.sameValue(function testcase() {
    var proto = {};
    Object.defineProperty(proto, "prop", {get: function () {return {};}, enumerable: true});
    var ConstructFun = function () {};
    ConstructFun.prototype = proto;
    var child = new ConstructFun;
    return Object.getOwnPropertyNames(child).indexOf('prop');
}(), -1);

