// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The PropertyName is not nullLiteral
 *
 * @section 11.1.5
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.5_Object_Initializer/S11.1.5_A4.2.js
 * @description Checking if execution of "var object = {null : true}" fails
 * @negative
 */

//CHECK#1
var object = {null : true};

