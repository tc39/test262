// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Intl.DateTimeFormat.prototype.formatRange.length.
includes: [propertyHelper.js]
features: [Intl.DateTimeFormat-formatRange]
---*/

assert.sameValue(Intl.DateTimeFormat.prototype.formatRange.length, 2);

verifyNotEnumerable(Intl.DateTimeFormat.prototype.formatRange, "length");
verifyNotWritable(Intl.DateTimeFormat.prototype.formatRange, "length");
verifyConfigurable(Intl.DateTimeFormat.prototype.formatRange, "length");
