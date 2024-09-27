// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-AsyncGenerators-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var BUGNUMBER = 1391519;
var summary = "for-await-of outside of async function should provide better error";

print(BUGNUMBER + ": " + summary);

assertThrownErrorContains(
    () => eval("for await (let x of []) {}"),
    "for await (... of ...) is only valid in"
);

// Extra `await` shouldn't throw that error.
assertThrownErrorContains(
    () => eval("async function f() { for await await (let x of []) {} }"),
    "missing ( after for"
);

