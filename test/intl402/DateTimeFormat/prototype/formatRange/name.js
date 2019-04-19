// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Intl.DateTimeFormat.prototype.formatRange.name value and descriptor.
includes: [propertyHelper.js]
features: [Intl.DateTimeFormat-formatRange]
---*/
assert.sameValue(Intl.DateTimeFormat.prototype.formatRange.name, 'formatRange',
  'The value of `Intl.DateTimeFormat.prototype.formatRange.name` is `"formatRange"`'
);

verifyNotEnumerable(Intl.DateTimeFormat.prototype.formatRange, 'name');
verifyNotWritable(Intl.DateTimeFormat.prototype.formatRange, 'name');
verifyConfigurable(Intl.DateTimeFormat.prototype.formatRange, 'name');
