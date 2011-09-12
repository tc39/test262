// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Arguments : (ArgumentList : ArgumentList,, AssignmentExpression) is a bad syntax
 *
 * @section 11.2.4, 11.2.3, 10.1.8
 * @path 11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.4_Argument_Lists/S11.2.4_A1.3_T1.js
 * @description incorrect syntax
 * @negative
 */

function f_arg() {
}

f_arg(1,,2);

