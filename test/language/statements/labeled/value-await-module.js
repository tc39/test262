// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-identifiers-static-semantics-early-errors
description: >
  `await` is a reserved identifier in module code and may not be used as a label.
info: |
  LabelIdentifier : await

  It is a Syntax Error if the goal symbol of the syntactic grammar is Module.
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

throw "Test262: This statement should not be evaluated.";

await: 1;
