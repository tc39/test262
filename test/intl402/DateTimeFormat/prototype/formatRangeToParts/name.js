// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Intl.DateTimeFormat.prototype.formatRangeToParts.name value and descriptor.
includes: [propertyHelper.js]
features: [Intl.DateTimeFormat-formatRange]
---*/
assert.sameValue(Intl.DateTimeFormat.prototype.formatRangeToParts.name, 'formatRangeToParts',
  'The value of `Intl.DateTimeFormat.prototype.formatRangeToParts.name` is `"formatRangeToParts"`'
);

verifyNotEnumerable(Intl.DateTimeFormat.prototype.formatRangeToParts, 'name');
verifyNotWritable(Intl.DateTimeFormat.prototype.formatRangeToParts, 'name');
verifyConfigurable(Intl.DateTimeFormat.prototype.formatRangeToParts, 'name');
