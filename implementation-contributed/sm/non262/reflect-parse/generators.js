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

// generators

assertDecl("function* gen() {}", genFunDecl("es6", ident("gen"), [], blockStmt([])));
assertExpr("(function*() {})", genFunExpr("es6", null, [], blockStmt([])));
assertExpr("(function* gen() {})", genFunExpr("es6", ident("gen"), [], blockStmt([])));

}

runtest(test);
