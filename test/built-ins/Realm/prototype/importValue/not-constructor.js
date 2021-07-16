// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.importvalue
description: >
  Realm.prototype.importValue is not a constructor.
includes: [isConstructor.js]
features: [callable-boundary-realms]
---*/

assert.sameValue(
  typeof Realm.prototype.importValue,
  'function',
  'This test must fail if Realm.prototype.importValue is not a function'
);

assert.sameValue(
  isConstructor(Realm.prototype.importValue),
  false,
  'isConstructor(Realm.prototype.importValue) must return false'
);

assert.throws(TypeError, () => {
  new Realm.prototype.importValue("");
}, '`let value = new Realm.prototype.importValue("")` throws TypeError');
