// Copyright (C) 2026 Benny Powers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Computed member expressions are not valid decorator syntax
esid: sec-decorator
negative:
  phase: parse
  type: SyntaxError
features: [decorators]
---*/

$DONOTEVALUATE();

var decorators = [function() {}];

var A = class {
  @decorators[0]
  method() {}
};
