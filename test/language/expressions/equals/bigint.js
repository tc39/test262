// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt equality
esid: pending
features: [BigInt]
---*/

assert("" == 0n);
assert("0" == 0n);
assert(0n == "");
assert(0n == "0");
assert(true == 1n);
assert(false == 0n);
assert(1n == true);
assert(0n == false);
assert(0n == 0);
assert(0 == 0n);
