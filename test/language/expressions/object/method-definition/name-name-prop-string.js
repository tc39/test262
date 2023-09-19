// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Functions declared as methods are assigned a `name` property according to
    the string value of their property name.
es6id: 14.3.8
includes: [propertyHelper.js]
---*/

var method = { method() {} }.method;

verifyProperty(method, 'name', {
  value: 'method',
  writable: false,
  enumerable: false,
  configurable: true,
});
