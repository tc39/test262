// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-system.global
description: System.global should be the global object
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(this, System.global);

assert.sameValue(Array, System.global.Array);
assert.sameValue(Boolean, System.global.Boolean);
assert.sameValue(Date, System.global.Date);
assert.sameValue(Error, System.global.Error);
assert.sameValue(Function, System.global.Function);
assert.sameValue(JSON, System.global.JSON);
assert.sameValue(Math, System.global.Math);
assert.sameValue(Number, System.global.Number);
assert.sameValue(RegExp, System.global.RegExp);
assert.sameValue(String, System.global.String);
assert.sameValue(System, System.global.System);

globalVariable = {};
assert.sameValue(globalVariable, System.global.globalVariable);
