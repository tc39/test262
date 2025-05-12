// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    await using declarations mixed: with, without initializer
negative:
  phase: parse
  type: SyntaxError
flags: [async]
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
async function f() {
  await using x = null, y;
}
