// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-reflect-parse-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/function test() {

// Bug 632027: array holes should reflect as null
assertExpr("[,]=[,]", aExpr("=", arrPatt([null]), arrExpr([null])));

}

runtest(test);
