// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Variable instantiation is performed using the global object as
 * the variable object and using property attributes { DontDelete }
 *
 * @section 10.2.1
 * @path 10_Execution_Contexts/10.2_Entering_An_Execution_Context/10.2.1_Global_Code/S10.2.1_A1_T2.js
 * @description Checking if deleting variable x, that is defined as x = 1, fails
 */

x = 1;

if (this.x !== 1) {
  $ERROR("#1: variable x is a property of global object");
}

if(delete this.x !== true){
  $ERROR("#2: variable x has property attribute DontDelete");
}

