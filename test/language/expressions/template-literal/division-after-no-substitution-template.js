// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-language-lexical-grammar
description: >
  A `/` after a NoSubstitutionTemplate is a division operator
info: |
  The InputElementRegExp goal symbol is used in all syntactic grammar contexts
  where a RegularExpressionLiteral is permitted but neither a TemplateMiddle,
  nor a TemplateTail is permitted. [...] In all other contexts, InputElementDiv
  is used as the lexical goal symbol.

  A TemplateLiteral is a PrimaryExpression, so it may be followed by `/` as a
  MultiplicativeOperator but not by a RegularExpressionLiteral.
---*/

var a = `8` / 2;
assert.sameValue(a, 4, "`8` / 2");

var b = `8` /2/ 2;
assert.sameValue(b, 2, "`8` /2/ 2");

var c = (`8` / 2);
assert.sameValue(c, 4, "(`8` / 2)");

var d = [`8` / 2, `9` / 3];
assert.sameValue(d[0] + d[1], 7, "[`8` / 2, `9` / 3]");

var e = (`t` / 2);
assert.sameValue(e, NaN, "(`t` / 2)");

var f = `8`
/ 2;
assert.sameValue(f, 4, "`8` <LF> / 2");
