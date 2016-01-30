// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    function declarations in statement position in strict mode:
    if ( Expression ) Statement
negative:
  stage: early
  type: SyntaxError
flags: [onlyStrict]
---*/
if (true) function g() {}

