// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.5_S2
description: >
    Symbol may not be used as a WeakMap key
features: [WeakMap]
---*/
var weakmap = new WeakMap();
var sym = Symbol();

assert.throws(TypeError, function() {
  weakmap.set(sym, 1);
});
