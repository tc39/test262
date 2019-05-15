// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: String.prototype.trimright
description: >
  String.prototype.trimRight property descriptor
info: >
  String.prototype.trimRight ( )

  The initial value of the trimRight property is the same function object as
  the initial value of the String.prototype.trimEnd property.

  17 ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [string-trimming, String.prototype.trimEnd]
---*/

verifyProperty(String.prototype, 'trimRight', {
  value: String.prototype.trimEnd,
  writable: true,
  enumerable: false,
  configurable: true,
});
