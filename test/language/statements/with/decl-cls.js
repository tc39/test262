// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Class declaration not allowed in statement position
esid: sec-with-statement
es6id: 13.11
negative:
  phase: early
  type: SyntaxError
---*/

with ({}) class C {}
