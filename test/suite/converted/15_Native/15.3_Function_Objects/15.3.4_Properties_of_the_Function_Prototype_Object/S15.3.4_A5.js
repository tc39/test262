// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function prototype object is itself a Function object without [[create]] property
 *
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A5.js
 * @description Checking if creating "new Function.prototype object" fails
 */

//CHECK#
try {
  var obj = new Function.prototype;
  $FAIL('#1: The Function prototype object is itself a Function object without [[create]] property: '+e);
} catch (e) {
  $PRINT("#1.1: The Function prototype object is itself a Function object without [[create]] property "+e);

}

