// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-27
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: throw (throw)
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var thro\u0077 = 123;
