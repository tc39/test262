// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-math.sumprecise
description: "sumPrecise" property of Math
includes: [propertyHelper.js]
---*/

verifyProperty(Math, "sumPrecise", {
  writable: false,
  enumerable: false,
  configurable: true
});
