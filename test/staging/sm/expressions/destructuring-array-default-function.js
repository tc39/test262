// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-expressions-shell.js]
description: |
  Array destructuring with various default values in various context - function expression
esid: pending
---*/

testDestructuringArrayDefault("function f() {}");
testDestructuringArrayDefault("function* g() {}");
testDestructuringArrayDefault("() => {}");
