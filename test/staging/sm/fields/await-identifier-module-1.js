// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- module
negative:
  phase: parse
  type: SyntaxError
description: |
  pending
esid: pending
---*/

async () => class { [await] = 1 };
$DONOTEVALUATE();
