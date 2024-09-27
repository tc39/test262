// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  no argument searches for a undefined value
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

assert.sameValue(#[0].includes(), false, "#[0].includes()");
assert.sameValue(#[undefined].includes(), true, "#[undefined].includes()");

