// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Lexical declaration (const) not allowed in statement position
esid: sec-for-statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for ( ; false; ) const x = null;
