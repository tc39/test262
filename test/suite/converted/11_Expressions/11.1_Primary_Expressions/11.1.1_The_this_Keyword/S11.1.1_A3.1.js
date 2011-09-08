// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Being in function code, "this" and eval("this"), called as a functions, return the global object
 *
 * @section: 11.1.1;
 * @path: 11_Expressions/11.1_Primary_Expressions/11.1.1_The_this_Keyword/S11.1.1_A3.1.js;
 * @description: Creating function which returns "this" or eval("this");
 */

//CHECK#1
function MyFunction() {return this}
if (MyFunction() !== this) {
  $ERROR('#1: function MyFunction() {return this} MyFunction() === this. Actual: ' + (MyFunction()));  
}

//CHECK#2
function MyFunction() {return eval("this")}
if (MyFunction() !== this) {
  $ERROR('#2: function MyFunction() {return eval("this")} MyFunction() === this. Actual: ' + (MyFunction()));  
}



