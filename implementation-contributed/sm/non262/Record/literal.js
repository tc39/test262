// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
let rec = #{ x: 1, "y": 2, 0: 3, 1n: 4, [`key${4}`]: 5 };

assert.sameValue(rec.x, 1);
assert.sameValue(rec.y, 2);
assert.sameValue(rec[0], 3);
assert.sameValue(rec[1], 4);
assert.sameValue(rec.key4, 5);

let dup = #{ x: 1, x: 2 };
assert.sameValue(dup.x, 2);

assertThrowsInstanceOf(
	() => #{ [Symbol()]: 1 },
	TypeError,
	"Symbols cannot be used as record keys"
  );

let rec2 = #{ x: 1, ...{ a: 2, z: 3 }, b: 4, ...{ d: 5 } };
assert.sameValue(rec2.x, 1);
assert.sameValue(rec2.a, 2);
assert.sameValue(rec2.z, 3);
assert.sameValue(rec2.b, 4);
assert.sameValue(rec2.d, 5);

assertThrowsInstanceOf(
	() => #{ ...{ [Symbol()]: 1 } },
	TypeError,
	"Symbols cannot be used as record keys"
);

let rec3 = #{
	...Object.defineProperty({}, "x", { value: 1 }),
	...Object.defineProperty({}, Symbol(), { value: 2 }),
};
assert.sameValue(rec3.x, undefined);

let rec4 = #{ ...{}, ...{}, ...{} };

