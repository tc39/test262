// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The function call Error(...) is equivalent to the object creation expression new
 * Error(...) with the same arguments
 *
 * @path 15_Native/15.11_Error_Objects/15.11.1_The_Error_Constructor_Called_as_a_Function/S15.11.1_A1_T1.js
 * @description Checking constructor of the newly constructed Error object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
Error.prototype.toString=Object.prototype.toString;
var err1=Error();
if(err1.constructor!==Error){
  $ERROR('#1: Error.prototype.toString=Object.prototype.toString; var err1=Error(); err1.constructor===Error. Actual: '+err1.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

