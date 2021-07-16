// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.importvalue
description: >
  Realm.prototype.importValue is an ECMAScript Standard built-in object function.
includes: [propertyHelper.js]
features: [callable-boundary-realms]
---*/

verifyNotEnumerable(Realm.prototype, "importValue");
verifyWritable(Realm.prototype, "importValue");
verifyConfigurable(Realm.prototype, "importValue");
