// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function.prototype.apply.length property has the attribute ReadOnly
 *
 * @section: 15.3.4.3;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.3_Function.prototype.apply/S15.3.4.3_A10.js;
 * @description: Checking if varying the Function.prototype.apply.length property fails;
 */

//CHECK#1
if (!(Function.prototype.apply.hasOwnProperty('length'))) {
  $FAIL('#1: the Function.prototype.apply has length property.');
}

var obj = Function.prototype.apply.length;

Function.prototype.apply.length = function(){return "shifted";};

//CHECK#2
if (Function.prototype.apply.length !== obj) {
  $ERROR('#2: the Function.prototype.apply length property has the attributes ReadOnly.');
}

