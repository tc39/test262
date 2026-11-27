// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arrow-function-definitions
description: >
  A template literal followed by `/` in a default parameter value of an arrow
  function
info: |
  ArrowParameters[Yield, Await] :
    BindingIdentifier[?Yield, ?Await]
    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]

  A TemplateLiteral is a PrimaryExpression, so it may be followed by `/` as a
  MultiplicativeOperator but not by a RegularExpressionLiteral. An Expression
  follows a TemplateHead or a TemplateMiddle, so a `/` there starts a
  RegularExpressionLiteral.
---*/

var f1 = (a = `8` / 2) => a;
assert.sameValue(f1(), 4, "(a = `8` / 2) => a");

var f2 = (a = `8${""}` / 2) => a;
assert.sameValue(f2(), 4, "(a = `8${\"\"}` / 2) => a");

var f3 = (a = `8` / 2, b = `9` / 3) => a + b;
assert.sameValue(f3(), 7, "(a = `8` / 2, b = `9` / 3) => a + b");

var f4 = (a = `8` /2/ 2) => a;
assert.sameValue(f4(), 2, "(a = `8` /2/ 2) => a");

var f5 = (a = `${/[)]/.source}`) => a;
assert.sameValue(f5(), "[)]", "(a = `${/[)]/.source}`) => a");

var f6 = (a = `${1}${/=>/.source}`) => a;
assert.sameValue(f6(), "1=>", "(a = `${1}${/=>/.source}`) => a");
