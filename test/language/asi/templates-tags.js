// Copyright 2017 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Semicolon is not inserted on a valid Tagged Template literal
esid: sec-rules-of-automatic-semicolon-insertion
info: |
  12.3.7 Tagged Templates

  ...

  12.3.7.1 Runtime Semantics: Evaluation

  MemberExpression : MemberExpression TemplateLiteral
  ...
---*/

const raw = String.raw
`tc39`

assert.sameValue(raw, "tc39");
