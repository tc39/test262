// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Being in function code, "this" and eval("this"), called as a constructors, return the object
 *
 * @section 11.1.1
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.1_The_this_Keyword/S11.1.1_A3.2.js
 * @description Create function. It have property, that returned "this"
 * @non_strict_only
 */

//CHECK#1
function MyFunction() {this.THIS = this}
if ((new MyFunction()).THIS.toString() !== "[object Object]") {
  $ERROR('#1: function MyFunction() {this.THIS = this} (new MyFunction()).THIS.toString() !== "[object Object]". Actual: ' + ((new MyFunction()).THIS.toString()));
}

//CHECK#2
function MyFunction() {this.THIS = eval("this")}
if ((new MyFunction()).THIS.toString() !== "[object Object]") {
  $ERROR('#2: function MyFunction() {this.THIS = eval("this")} (new MyFunction()).THIS.toString() !== "[object Object]". Actual: ' + ((new MyFunction()).THIS.toString()));
}


