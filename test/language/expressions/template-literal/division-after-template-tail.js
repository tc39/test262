// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-language-lexical-grammar
description: >
  A `/` after a TemplateTail is a division operator, and a `/` after a
  TemplateHead or TemplateMiddle starts a regular expression
info: |
  The InputElementRegExpOrTemplateTail goal is used in syntactic grammar
  contexts where a RegularExpressionLiteral, a TemplateMiddle, or a
  TemplateTail is permitted. [...] In all other contexts, InputElementDiv is
  used as the lexical goal symbol.

  A TemplateLiteral is a PrimaryExpression, so it may be followed by `/` as a
  MultiplicativeOperator but not by a RegularExpressionLiteral. An Expression
  follows a TemplateHead or a TemplateMiddle.
---*/

var a = `4${0}` / 2;
assert.sameValue(a, 20, "`4${0}` / 2");

var b = `4${0}` / 2 / 1;
assert.sameValue(b, 20, "`4${0}` / 2 / 1");

var c = `${1}${2}` /3/ 4;
assert.sameValue(c, 1, "`${1}${2}` /3/ 4");

var d = (`8${""}` / 2);
assert.sameValue(d, 4, "(`8${\"\"}` / 2)");

var e = `${/a/.source}${/b/.source}`;
assert.sameValue(e, "ab", "regular expressions after TemplateHead and TemplateMiddle");
