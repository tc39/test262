// Copyright (C) 2026 Benny Powers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Decorators are not valid on class constructors
esid: sec-class-definitions
negative:
  phase: parse
  type: SyntaxError
features: [decorators]
---*/

$DONOTEVALUATE();

function dec() {}

var A = class {
  @dec
  constructor() {}
};
