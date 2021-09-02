// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.importvalue
description: >
  Realm.prototype.importValue is an ECMAScript Standard built-in object function.
includes: [propertyHelper.js]
features: [ShadowRealm]
---*/

verifyProperty(Realm.prototype, "importValue", {
  enumerable: false,
  writable: true,
  configurable: true,
});
