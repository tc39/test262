// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    'using' does not allow ArrayBindingPattern in lexical bindings, even after a valid lexical binding
negative:
  phase: parse
  type: SyntaxError
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();

{
  using x = null, [] = null;
}
