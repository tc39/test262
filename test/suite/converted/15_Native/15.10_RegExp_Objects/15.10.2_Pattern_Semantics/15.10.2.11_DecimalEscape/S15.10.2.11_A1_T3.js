// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit]
 *
 * @section: 15.10.2.11;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.11_DecimalEscape/S15.10.2.11_A1_T3.js;
 * @description: It is an error if n is greater than the total number of left capturing parentheses in the entire regular expression;
 * @negative;
 */

/(?:A)\2/.exec("AA");

