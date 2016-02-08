// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es7id: 14.3.1
description: >
  A SyntaxError is thrown if a method contains a non-simple parameter list and a UseStrict directive.
info: >
  Static Semantics: Early Errors

   It is a Syntax Error if ContainsUseStrict of FunctionBody is true and IsSimpleParameterList of StrictFormalParameters is false.
negative: SyntaxError
---*/

var o = {
  m(a = 0) {
    "use strict";
  }
};
