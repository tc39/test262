// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions
description: >
  YieldExpression cannot be used within the FormalParameters of a generator
  function
info: |
  GeneratorMethod[Yield]:

     * PropertyName[?Yield] ( StrictFormalParameters[Yield] ) { GeneratorBody }

  YieldExpression cannot be used within the FormalParameters of a generator
  function because any expressions that are part of FormalParameters are
  evaluated before the resulting generator object is in a resumable state.
features: [generators, default-parameters]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  *g(x = yield) {}
}
