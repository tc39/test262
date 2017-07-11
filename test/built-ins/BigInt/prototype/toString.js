// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt toString method
esid: pending
features: [BigInt]
---*/

const n = 1234567890n;
const strs = {
    2: "1001001100101100000001011010010",
    3: "10012001001112202200",
    4: "1021211200023102",
    5: "10012022133030",
    6: "322301024030",
    7: "42410440203",
    8: "11145401322",
    9: "3161045680",
    10: "1234567890",
    11: "583977146",
    12: "2a5555016",
    13: "168a0865a",
    14: "b9d6b5aa",
    15: "735b7d60",
    16: "499602d2",
    17: "30288g3a",
    18: "20568ad0",
    19: "174b57c7",
    20: "j5g0jea",
    21: "e8605e3",
    22: "ajc3e26",
    23: "87ifcgi",
    24: "6b1230i",
    25: "51ac8ff",
    26: "3pnfhma",
    27: "3511eki",
    28: "2fkfbqa",
    29: "225ep2g",
    30: "1ko4m30",
    31: "1c3ou0k",
    32: "14pc0mi",
    33: "vi0m56",
    34: "r5spaa",
    35: "nhokia",
    36: "kf12oi"
};

assert.throws(TypeError, () => BigInt.prototype.toString.call(null));
assert.sameValue(n.toString(), n.toString(10));
assert.sameValue(n.toString(undefined), n.toString(10));
for (let radix of [1, 37, NaN, 0, Infinity]) {
    assert.throws(RangeError, () => n.toString(radix));
    assert.throws(RangeError, () => n.toString(-radix));
}
for (let i = 2; i < 37; i++) {
    for (let x of [n, Object(n)]) {
        assert.sameValue(x.toString(i), strs[i]);
        assert.sameValue(x.toString(i + 0.5), strs[i]);
    }
}
