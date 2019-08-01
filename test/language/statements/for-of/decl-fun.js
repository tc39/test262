// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Function declaration not allowed in statement position
esid: sec-for-in-and-for-of-statements
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var x of []) function f() {}
