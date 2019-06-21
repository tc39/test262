// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-finalization-group-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    'FinalizationGroup'.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [FinalizationGroup, Symbol, Symbol.toStringTag]
---*/

verifyProperty(FinalizationGroup.prototype, Symbol.toStringTag, {
  value: 'FinalizationGroup',
  writable: false,
  enumerable: false,
  configurable: true
});
