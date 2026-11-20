// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A class cannot have decorators both before and after `export`
esid: sec-exports-static-semantics-early-errors
info: |
  ExportDeclaration :
    DecoratorList[~Yield, +Await]? export Declaration[~Yield, +Await]
    DecoratorList[~Yield, +Await]? export default ClassDeclaration[~Yield, +Await, +Default]
negative:
  phase: parse
  type: SyntaxError
flags: [module]
features: [decorators]
---*/

$DONOTEVALUATE();

function dec() {}

@dec export @dec class C {}
