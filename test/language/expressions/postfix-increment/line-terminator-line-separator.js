// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminator between LeftHandSideExpression and "++" is not allowed
esid: postfix-increment-operator
description: Checking Line Separator
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x ++;
// The preceding line contains an unprintable LINE SEPARATOR character (U+2028)
