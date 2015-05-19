// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator functions declared as methods may be used as constructors.
es6id: 14.4.13
features: [generators]
---*/

var method = { *method() {} }.method;

var instance = new method();

assert.sameValue(instance instanceof method, true);
