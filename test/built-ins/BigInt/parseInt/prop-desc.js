// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: BigInt.parseInt property descriptor
info: >
  BigInt.parseInt ( string, radix )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyProperty(BigInt, "parseInt", {
  writable: true,
  enumerable: false,
  configurable: true
});
