// Copyright 2016-2019 Mozilla Corporation, Igalia S.L. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Property type and descriptor.
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Intl.DateTimeFormat.prototype.formatRange,
  'function',
  '`typeof Intl.DateTimeFormat.prototype.formatRange` is `function`'
);

verifyNotEnumerable(Intl.DateTimeFormat.prototype, 'formatRange');
verifyWritable(Intl.DateTimeFormat.prototype, 'formatRange');
verifyConfigurable(Intl.DateTimeFormat.prototype, 'formatRange');
