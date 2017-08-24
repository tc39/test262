// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt prototype object attributes
esid: pending
features: [BigInt]
includes: [propertyHelper.js]
---*/

verifyNotWritable(BigInt, "prototype");
verifyNotEnumerable(BigInt, "prototype");
verifyNotConfigurable(BigInt, "prototype");
