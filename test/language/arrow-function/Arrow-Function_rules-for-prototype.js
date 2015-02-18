// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    Arrow functions are like functions, except they throw when using the
    "new" operator on them.
---*/

assert.sameValue(typeof (() => {}), "function");
assert.sameValue(Object.getPrototypeOf(() => {}), Function.prototype);
assert.throws(TypeError, function() { new (() => {}); });
assert.sameValue("prototype" in (() => {}), false);
