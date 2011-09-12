// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Being in global code, "this" and "eval("this")" return the global object
 *
 * @section 11.1.1
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.1_The_this_Keyword/S11.1.1_A2.js
 * @description Checking if execution of "this" and eval("this"), which are in global code, return the global object by using toString function
 */

//CHECK#1
if (this.toString() !== toString()) {
  $ERROR('#1: this.toString() === toString(). Actual: ' + (this.toString()));  
}

//CHECK#2
if (eval("this").toString() !== toString()) {
  $ERROR('#2: eval("this").toString() === toString(). Actual: ' + (this.toString()));  
}

