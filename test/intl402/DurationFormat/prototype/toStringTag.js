// Copyright (C) 2021 Nikhil Singhal. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype-@@tostringtag
description: Checks prototype's toStringTag value
info: |
  The initial value of the @@toStringTag property is the string value "Intl.DurationFormat".
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
features: [Intl.DurationFormat, Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Object.prototype.toString.call(Intl.DurationFormat.prototype),
  '[object Intl.DurationFormat]',
  'prototype - Initial value of @@toStringTag is not Intl.DurationFormat',
);

assert.sameValue(
  Object.prototype.toString.call(new Intl.DurationFormat()),
  '[object Intl.DurationFormat]',
  'new call - Initial value of @@toStringTag is not Intl.DurationFormat',
);

const durationFormat = new Intl.DurationFormat();

verifyNotEnumerable(durationFormat, Symbol.toStringTag);
verifyNotWritable(durationFormat, Symbol.toStringTag);
verifyConfigurable(durationFormat, Symbol.toStringTag);
