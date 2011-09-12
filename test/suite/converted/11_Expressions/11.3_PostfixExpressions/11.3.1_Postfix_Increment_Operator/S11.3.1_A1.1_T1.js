// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator between LeftHandSideExpression and "++" is not allowed
 *
 * @section 11.3.1, 11.6.3, 7.3
 * @path 11_Expressions/11.3_PostfixExpressions/11.3.1_Postfix_Increment_Operator/S11.3.1_A1.1_T1.js
 * @description Checking Line Feed
 * @negative
 */

//CHECK#1
eval("var x = 1; x\u000A++");

