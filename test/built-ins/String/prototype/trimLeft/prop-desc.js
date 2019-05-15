// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: String.prototype.trimleft
description: >
  String.prototype.trimLeft property descriptor
info: >
  String.prototype.trimLeft ( )

  The initial value of the trimLeft property is the same function object as
  the initial value of the String.prototype.trimStart property.

  17 ECMAScript Standard Built-in Objects:

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [string-trimming, String.prototype.trimStart]
---*/

verifyProperty(String.prototype, 'trimLeft', {
  value: String.prototype.trimStart,
  writable: true,
  enumerable: false,
  configurable: true,
});
