// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-pattern-semantics
description: Out-of-bounds decimal escapes
info: |
    1. Evaluate DecimalEscape to obtain an integer n.
    2. If n>NcapturingParens, throw a SyntaxError exception.

    When the "unicode" flag is set, this algorithm is honored irrespective of
    the presence of Annex B extensions.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\8/u;
