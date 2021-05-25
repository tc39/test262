// Copyright (c) 2021 Jamie Kyle.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (writable, configurable,
    enumerable own value property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});

assert(Object.hasOwn(o, "foo"), 'Object.hasOwn(o, "foo") !== true');
