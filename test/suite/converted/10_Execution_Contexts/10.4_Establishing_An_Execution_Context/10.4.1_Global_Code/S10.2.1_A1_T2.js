// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Variable instantiation is performed using the global object as
 * the variable object and using property attributes { DontDelete }
 *
 * @path 10_Execution_Contexts/10.4_Establishing_An_Execution_Context/10.4.1_Global_Code/S10.2.1_A1_T2.js
 * @description Checking if deleting variable x, that is defined as x = 1, fails
 * @noStrict
 */

x = 1;

if (this.x !== 1) {
  $ERROR("#1: variable x is a property of global object");
}

if(delete this.x !== true){
  $ERROR("#2: variable x has property attribute DontDelete");
}

