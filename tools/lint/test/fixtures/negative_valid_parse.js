^ expected errors | v input
// Copyright (C) 2017 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
negative:
  type: SyntaxError
  phase: parse
---*/

throw "Test262: This statement should not be evaluated.";

!!!
