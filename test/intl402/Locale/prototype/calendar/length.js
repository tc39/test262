// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.calendar
description: >
  get Intl.Locale.prototype.calendar.length is 0.
info: |
  ECMAScript Standard Built-in Objects

  Every built-in function object, including constructors, has a "length" property
  whose value is a non-negative integral Number. Unless otherwise specified,
  this value is the number of required parameters shown in the subclause heading
  for the function description. Optional parameters and rest parameters are not
  included in the parameter count.

  Unless otherwise specified, the "length" property of a built-in function object
  has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Intl.Locale]
---*/

const getter = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, "calendar").get;
verifyProperty(getter, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true,
});
