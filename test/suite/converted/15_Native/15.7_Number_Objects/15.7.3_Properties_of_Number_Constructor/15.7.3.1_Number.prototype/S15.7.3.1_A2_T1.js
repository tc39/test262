// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.prototype is itself Number object
 *
 * @section: 15.7.3.1;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.1_Number.prototype/S15.7.3.1_A2_T1.js;
 * @description: Checking type of Number.prototype property - test based on
 * deleting Number.prototype.toString;
 */

//CHECK#1
if (typeof Number.prototype !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

delete Number.prototype.toString;

if (Number.prototype.toString() !== "[object Number]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Number"');
}

