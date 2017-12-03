NEGATIVE
^ expected errors | v input
// Copyright (C) 2017 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
flags: [module]
negative:
  type: SyntaxError
  phase: resolution
---*/

throw "Test262: This statement should not be evaluated!";

import 'non-existent-module.js';
