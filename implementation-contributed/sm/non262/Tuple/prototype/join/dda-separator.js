// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- IsHTMLDDA
- noStrict
includes:
- non262-Tuple-prototype-join-shell.js
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
features:
- Tuple
description: |
  pending
esid: pending
---*/
let dda = createIsHTMLDDA();

assert.sameValue(dda == null, true);
assert.sameValue(dda === null, false);

assert.sameValue(dda == undefined, true);
assert.sameValue(dda === undefined, false);

let tup = Tuple("A", "B");
assert.sameValue(tup.join(null), "A,B");
assert.sameValue(tup.join(undefined), "A,B");
assert.sameValue(tup.join(dda), "A" + dda.toString() + "B");

