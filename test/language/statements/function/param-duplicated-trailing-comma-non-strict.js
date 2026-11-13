// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-parameter-lists-static-semantics-early-errors
description: >
  Duplicate identifier allowed in non-strict function declaration simple
  parameter list with a trailing comma
info: |
  Static Semantics: Early Errors

  FormalParameters :
    FunctionRestParameter
    FormalParameterList ,opt
    FormalParameterList , FunctionRestParameter

  - It is a Syntax Error if the BoundNames of FormalParameters contains any
    duplicate elements and either IsSimpleParameterList of FormalParameters is
    false or IsStrict(FormalParameters) is true.
flags: [noStrict]
---*/

function foo(a, a,) {}
