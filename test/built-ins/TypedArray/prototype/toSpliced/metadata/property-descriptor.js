// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: >
  "toSpliced" property of %TypedArray%.prototype
info: |
  17 ECMAScript Standard Built-in Objects

  Every other data property described in clauses 18 through 26 and in Annex B.2
  has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

assert.sameValue(typeof TypedArray.prototype.toSpliced, "function", "typeof");

verifyProperty(TypedArray.prototype, "toSpliced", {
  value: TypedArray.prototype.toSpliced,
  writable: true,
  enumerable: false,
  configurable: true,
});
