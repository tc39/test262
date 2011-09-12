// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[Construct]] constructs an object. Invoked via the new operator. Objects that implement this internal method are called constructors
 *
 * @section 8.6.2, 15.2.2
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2_A6.js
 * @description Create a few Objects via the new operator
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var objInstance=new Object;
if (objInstance.constructor !== Object){
  $ERROR('#1: var objInstance=new Object; objInstance.constructor === Object. Actual: ' + (objInstance.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
var numInstance=new Number;
if (numInstance.constructor !== Number){
  $ERROR('#2: var numInstance=new Number; numInstance.constructor === Number. Actual: ' + (numInstance.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

