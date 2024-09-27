// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
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
var boxO = Object(#[1, 2, 3]);

assert.sameValue(Object.isExtensible(boxO), false);
assert.sameValue(Object.isSealed(boxO), true);
assert.sameValue(Object.isFrozen(boxO), true);

boxO[0] = 3;
assert.sameValue(boxO[0], 1);
assertThrowsInstanceOf(() => { "use strict"; boxO[0] = 3; }, TypeError);
assert.sameValue(boxO[0], 1);

boxO[4] = 3;
assert.sameValue(boxO[4], undefined);
assertThrowsInstanceOf(() => { "use strict"; boxO[4] = 3; }, TypeError);
assert.sameValue(boxO[4], undefined);

assertThrowsInstanceOf(() => { Object.defineProperty(boxO, "0", { value: 3 }); }, TypeError);
assert.sameValue(boxO[0], 1);

assertThrowsInstanceOf(() => { Object.defineProperty(boxO, "4", { value: 3 }); }, TypeError);
assert.sameValue(boxO[4], undefined);

