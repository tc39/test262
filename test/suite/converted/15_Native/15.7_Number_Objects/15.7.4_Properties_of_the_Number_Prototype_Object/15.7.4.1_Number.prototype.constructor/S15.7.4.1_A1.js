// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Number.prototype.constructor is the
 * built-in Number constructor
 *
 * @section: 15.7.4.1;
 * @path: 15_Native/15.7_Number_Objects/15.7.4_Properties_of_the_Number_Prototype_Object/15.7.4.1_Number.prototype.constructor/S15.7.4.1_A1.js;
 * @description: Compare Number.prototype.constructor with Number;
 */

//CHECK#1
if(Number.prototype.constructor !== Number){
  $ERROR('#1: Number.prototype.constructor === Number');
}


