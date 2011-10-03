// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator between LeftHandSideExpression and "--" is not allowed
 *
 * @path 11_Expressions/11.3_PostfixExpressions/11.3.2_Postfix_Decrement_Operator/S11.3.2_A1.1_T3.js
 * @description Checking Page separator
 * @negative
 */

//CHECK#1
eval("var x = 1; x\u2028--");

