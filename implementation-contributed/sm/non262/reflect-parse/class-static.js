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
---*/// Classes
function testClassStaticBlock() {

    assertExpr("(class C { static { 2; } })", classExpr(ident("C"), null, [staticClassBlock(blockStmt([exprStmt(lit(2))]))]));
}

runtest(testClassStaticBlock);