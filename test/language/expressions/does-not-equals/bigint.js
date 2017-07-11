// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt equality
esid: pending
features: [BigInt]
---*/

assert("x" != 0n);
assert(0n != "x");
assert(true != 0n);
assert(false != 1n);
assert(0n != true);
assert(1n != false);
assert(0n != NaN);
assert(0n != Infinity);
assert(0n != -Infinity);
