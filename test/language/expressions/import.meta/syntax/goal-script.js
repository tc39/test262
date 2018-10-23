// Copyright (C) 2018 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-left-hand-side-expressions-static-semantics-early-errors
description: >
  An early Syntax Error is thrown when the syntactic goal symbol is Script.
info: |
  It is an early Syntax Error if Module is not the syntactic goal symbol.
negative:
  phase: early
  type: SyntaxError
features: [import.meta]
---*/

throw "Test262: This statement should not be evaluated.";

import.meta;
