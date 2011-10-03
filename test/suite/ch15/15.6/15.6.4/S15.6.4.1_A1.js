// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Boolean.prototype.constructor is the
 * built-in Boolean constructor
 *
 * @path 15_Native/15.6_Boolean_Objects/15.6.4_Properties_of_the_Boolean_Prototype_Object/S15.6.4.1_A1.js
 * @description Compare Boolean.prototype.constructor with Boolean
 */

//CHECK#1
if(Boolean.prototype.constructor !== Boolean){
  $ERROR('#1: Boolean.prototype.constructor === Boolean');
}

