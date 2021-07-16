// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.plaindatetime
description: Temporal.now.plainDateTime does not implement [[Construct]]
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.sameValue(isConstructor(Temporal.now.plainDateTime), false, 'isConstructor(Temporal.now.plainDateTime) must return false');

assert.throws(TypeError, () => {
  new Temporal.now.plainDateTime();
}, '`new Temporal.now.plainDateTime()` throws TypeError');
