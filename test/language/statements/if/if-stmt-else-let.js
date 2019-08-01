// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Lexical declaration (let) not allowed in statement position
esid: sec-if-statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if (false) ; else let x;
