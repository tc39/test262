// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-properties-of-symbol-instances
description: >
  Symbol primitives and objects are not callable.
info: |
  Properties of Symbol Instances

  Symbol instances are ordinary objects that inherit properties from the
  Symbol prototype object. Symbol instances have a [[SymbolData]] internal slot.
  The [[SymbolData]] internal slot is the Symbol value represented by this
  Symbol object.
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Symbol('desc')();
});

assert.throws(TypeError, function() {
  let sym = Symbol();
  let obj = Object(sym);
  obj();
});
