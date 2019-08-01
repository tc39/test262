// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminator between LeftHandSideExpression and "--" is not allowed
esid: sec-postfix-decrement-operator
description: Checking Carriage Return
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x
--;
// The preceding line contains an unprintable CARRIAGE RETURN character (U+000D)
