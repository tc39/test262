// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Rick Waldron
esid: sec-unary-operators
description: >
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `+` UnaryExpression
    ...

negative: SyntaxError
---*/
+1 ** 2;
