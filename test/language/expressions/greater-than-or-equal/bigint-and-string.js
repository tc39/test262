// Copyright (C) 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Relational comparison of BigInt and string values
esid: sec-abstract-relational-comparison
features: [BigInt]
---*/

assert.sameValue(0n >= "0", true, "0n >= '0'");
assert.sameValue("0" >= 0n, true, "'0' >= 0n");

assert.sameValue(0n >= "1", false, "0n >= '1'");
assert.sameValue("0" >= 1n, false, "'0' >= 1n");

assert.sameValue(1n >= "0", true, "1n >= '0'");
assert.sameValue("1" >= 0n, true, "'1' >= 0n");

assert.sameValue(0n >= "", true, "0n >= ''");
assert.sameValue("" >= 0n, true, "'' >= 0n");

assert.sameValue(0n >= "1", false, "0n >= '1'");
assert.sameValue("" >= 1n, false, "'' >= 1n");

assert.sameValue(1n >= "", true, "1n >= ''");
assert.sameValue("1" >= 0n, true, "'1' >= 0n");

assert.sameValue(1n >= "1", true, "1n >= '1'");
assert.sameValue("1" >= 1n, true, "'1' >= 1n");

assert.sameValue(1n >= "-1", true, "1n >= '-1'");
assert.sameValue("1" >= -1n, true, "'1' >= -1n");

assert.sameValue(-1n >= "1", false, "-1n >= '1'");
assert.sameValue("-1" >= 1n, false, "'-1' >= 1n");

assert.sameValue(-1n >= "-1", true, "-1n >= '-1'");
assert.sameValue("-1" >= -1n, true, "'-1' >= -1n");

assert.sameValue(9007199254740993n >= "9007199254740992", true,
                 "9007199254740993n >= '9007199254740992'");
assert.sameValue("9007199254740993" >= 9007199254740992n, true,
                 "'9007199254740993' >= 9007199254740992n");

assert.sameValue(-9007199254740992n >= "-9007199254740993", true,
                 "-9007199254740992n >= '-9007199254740993'");
assert.sameValue("-9007199254740992" >= -9007199254740993n, true,
                 "'-9007199254740992' >= -9007199254740993n");
