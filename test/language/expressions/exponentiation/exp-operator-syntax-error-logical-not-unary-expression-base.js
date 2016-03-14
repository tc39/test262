// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `!` UnaryExpression
info: >
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `!` UnaryExpression
    ...

negative:
  stage: early
  type: SyntaxError
---*/
!1 ** 2;
