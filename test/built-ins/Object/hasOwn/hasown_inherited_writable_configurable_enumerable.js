// Copyright (c) 2021 Jamie Kyle.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (writable, configurable,
    enumerable inherited value property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
var o = Object.create(base);

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
