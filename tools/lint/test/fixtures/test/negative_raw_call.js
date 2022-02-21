^ expected errors | v input
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Minimal test
negative:
  phase: parse
  type: SyntaxError
flags: [raw]
---*/

throw "Test262: This statement should not be evaluated.";

!!!
