// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
includes: [propertyHelper.js]
---*/

assert.sameValue(Intl.PluralRules.prototype.resolvedOptions.name, "resolvedOptions");

verifyNotEnumerable(Intl.PluralRules.prototype.resolvedOptions, "name");
verifyNotWritable(Intl.PluralRules.prototype.resolvedOptions, "name");
verifyConfigurable(Intl.PluralRules.prototype.resolvedOptions, "name");
