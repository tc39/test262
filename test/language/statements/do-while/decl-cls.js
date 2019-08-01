// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Class declaration not allowed in statement position
esid: sec-do-while-statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

do class C {} while (false)
