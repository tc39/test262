// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Lexical declaration (const) not allowed in statement position
esid: sec-with-statement
es6id: 13.11
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
features: [with]
---*/

$DONOTEVALUATE();

with ({}) const x = null;
