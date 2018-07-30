// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: static class fields forbid PropName 'prototype' (early error -- PropName of StringLiteral is forbidden value)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-private]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElementName : PrivateName;

    It is a Syntax  Error if StringValue of PrivateName is "#constructor".

---*/


throw "Test262: This statement should not be evaluated.";

class C {
  #constructor;
}
