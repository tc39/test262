// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The body may not re-declare variables declared in the head
negative: SyntaxError
info: |
    It is a Syntax Error if any element of the BoundNames of ForDeclaration
    also occurs in the VarDeclaredNames of Statement.
id: sec-for-in-and-for-of-statements
es6id: 13.7.5
---*/

for (const x in {}) {
  var x;
}
