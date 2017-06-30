// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

throw "Test262: This statement should not be evaluated.";

for (const x = 0; false;)
  import v from './decl-pos-import-for-const.js';
