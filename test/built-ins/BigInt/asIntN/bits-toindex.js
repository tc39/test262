// This file was procedurally generated from the following source file:
// - src/type-coercion/BigInt.asIntN.py
// For more information, see CONTRIBUTING.md section "Type coercion tests".
/*---
description: BigInt.asIntN type coercion for bits parameter
esid: pending
info: |
  BigInt.asIntN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).
flags: [generated]
features: [BigInt]
---*/

assert.sameValue(BigInt.asIntN(0, 1n), 0n);
assert.sameValue(BigInt.asIntN(1, 1n), -1n);
assert.sameValue(BigInt.asIntN(-0.9, 1n), 0n, "ToIndex: truncate towards 0");
assert.sameValue(BigInt.asIntN(0.9, 1n), 0n, "ToIndex: truncate towards 0");
assert.sameValue(BigInt.asIntN(NaN, 1n), 0n, "ToIndex: NaN => 0");
assert.sameValue(BigInt.asIntN(undefined, 1n), 0n, "ToIndex: undefined => NaN => 0");
assert.sameValue(BigInt.asIntN(null, 1n), 0n, "ToIndex: null => 0");
assert.sameValue(BigInt.asIntN(false, 1n), 0n, "ToIndex: false => 0");
assert.sameValue(BigInt.asIntN(true, 1n), -1n, "ToIndex: true => 1");
assert.sameValue(BigInt.asIntN("0", 1n), 0n, "ToIndex: parse Number");
assert.sameValue(BigInt.asIntN("1", 1n), -1n, "ToIndex: parse Number");
assert.sameValue(BigInt.asIntN("", 1n), 0n, "ToIndex: parse Number => NaN => 0");
assert.sameValue(BigInt.asIntN("foo", 1n), 0n, "ToIndex: parse Number => NaN => 0");
assert.sameValue(BigInt.asIntN("true", 1n), 0n, "ToIndex: parse Number => NaN => 0");
assert.sameValue(BigInt.asIntN(3, 10n), 2n);
assert.sameValue(BigInt.asIntN("3", 10n), 2n, "toIndex: parse Number");
assert.sameValue(BigInt.asIntN(3.9, 10n), 2n, "toIndex: truncate towards 0");
assert.sameValue(BigInt.asIntN("3.9", 10n), 2n, "toIndex: parse Number => truncate towards 0");
assert.sameValue(BigInt.asIntN([0], 1n), 0n, 'ToIndex: [0].toString() => "0" => 0');
assert.sameValue(BigInt.asIntN(["1"], 1n), -1n, 'ToIndex: ["1"].toString() => "1" => 1');
assert.sameValue(BigInt.asIntN({}, 1n), 0n, 'ToIndex: ({}).toString() => "[object Object]" => NaN => 0');
assert.sameValue(BigInt.asIntN([], 1n), 0n, 'ToIndex: [].toString() => "" => NaN => 0');
