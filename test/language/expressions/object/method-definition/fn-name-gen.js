// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 14.4.13
description: >
    Assignment of function `name` attribute (GeneratorMethod)
info: |
    GeneratorMethod :
        * PropertyName ( StrictFormalParameters ) { GeneratorBody }

    [...]
    9. Perform SetFunctionName(closure, propKey).
includes: [propertyHelper.js]
features: [generators, Symbol]
---*/

var namedSym = Symbol('test262');
var anonSym = Symbol();
var registeredSym = Symbol.for('registered');
var o;

o = {
  *id() {},
  *[anonSym]() {},
  *[namedSym]() {},
  *[registeredSym]() {}
};

verifyProperty(o.id, 'name', {
  value: 'id',
  writable: false,
  enumerable: false,
  configurable: true,
});

verifyProperty(o[anonSym], 'name', {
  value: '',
  writable: false,
  enumerable: false,
  configurable: true,
});

verifyProperty(o[namedSym], 'name', {
  value: '[test262]',
  writable: false,
  enumerable: false,
  configurable: true,
});

verifyProperty(o[registeredSym], 'name', {
  value: '[registered]',
  writable: false,
  enumerable: false,
  configurable: true,
});
