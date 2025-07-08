// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DisplayNames.prototype.of
description: >
  Intl.DisplayNames.prototype.of.name is "of".
info: |
  ECMAScript Standard Built-in Objects

  Every built-in function object, including constructors, has a "name" property
  whose value is a String. Unless otherwise specified, this value is the name
  that is given to the function in this specification.

  Unless otherwise specified, the "name" property of a built-in function object
  has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Intl.DisplayNames]
---*/

verifyProperty(Intl.DisplayNames.prototype.of, "name", {
  value: "of",
  writable: false,
  enumerable: false,
  configurable: true,
});
