// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-expressions-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1184922;
var summary = "Array destructuring with various default values in various context - call/new expression";

print(BUGNUMBER + ": " + summary);

testDestructuringArrayDefault("func()");
testDestructuringArrayDefault("new func()");

