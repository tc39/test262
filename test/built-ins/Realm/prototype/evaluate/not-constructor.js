// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.evaluate
description: >
  Realm.prototype.evaluate is not a constructor.
includes: [isConstructor.js]
features: [callable-boundary-realms]
---*/

assert.sameValue(
  typeof Realm.prototype.evaluate,
  'function',
  'This test must fail if Realm.prototype.evaluate is not a function'
);

assert.sameValue(
  isConstructor(Realm.prototype.evaluate),
  false,
  'isConstructor(Realm.prototype.evaluate) must return false'
);

assert.throws(TypeError, () => {
  new Realm.prototype.evaluate("");
}, '`let value = new Realm.prototype.evaluate("")` throws TypeError');

