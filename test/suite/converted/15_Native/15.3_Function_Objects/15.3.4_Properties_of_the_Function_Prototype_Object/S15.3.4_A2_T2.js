// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined
 *
 * @section: 15.3.4;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A2_T2.js;
 * @description: Call Function.prototype(null,void 0);
 */

//CHECK#1
try {
  if (Function.prototype(null,void 0) !== undefined) {
    $ERROR('#1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined');
  }
} catch (e) {
  $ERROR('#1.1: The Function prototype object is itself a Function object that, when invoked, accepts any arguments and returns undefined: '+e);
}

