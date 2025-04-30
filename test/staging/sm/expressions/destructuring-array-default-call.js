// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  Array destructuring with various default values in various context - call/new expression
esid: pending
---*/

testDestructuringArrayDefault("func()");
testDestructuringArrayDefault("new func()");
