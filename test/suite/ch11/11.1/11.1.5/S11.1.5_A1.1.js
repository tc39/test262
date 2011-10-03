// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Evaluate the production ObjectLiteral: { }
 *
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.5_Object_Initializer/S11.1.5_A1.1.js
 * @description Checking various properteis of the object defined with "var object = {}"
 */

var object = {};

//CHECK#1
if (typeof object !== "object") {
  $ERROR('#1: var object = {}; typeof object === "object". Actual: ' + (typeof object));
}

//CHECK#2
if (object instanceof Object !== true) {
  $ERROR('#2: var object = {}; object instanceof Object === true');
}

//CHECK#3
if (object.toString !== Object.prototype.toString) {
  $ERROR('#3: var object = {}; object.toString === Object.prototype.toString. Actual: ' + (object.toString));
}

//CHECK#4
if (object.toString() !== "[object Object]") {
  $ERROR('#4: var object = {}; object.toString === "[object Object]". Actual: ' + (object.toString));
}

