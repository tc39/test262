// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSpliced
description: >
  %TypedArray%.prototype.toSpliced.name is "toSpliced".
info: |
  %TypedArray%.prototype.toSpliced ( start, deleteCount, ...items )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [testTypedArray.js, propertyHelper.js]
features: [TypedArray, change-array-by-copy]
---*/

verifyProperty(TypedArray.prototype.toSpliced, "name", {
  value: "toSpliced",
  writable: false,
  enumerable: false,
  configurable: true,
});
