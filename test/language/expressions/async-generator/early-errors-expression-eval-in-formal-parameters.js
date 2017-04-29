// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  It is a SyntaxError if FormalParameters contains eval in strict mode.
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
features: [async-iteration]
---*/

throw "Test262: This statement should not be evaluated.";

(async function*(eval) { });
