// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object prototype object has not prototype
 *
 * @section: 15.2.4, 8.6.2;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4_A1_T2.js;
 * @description: Since the Object prototype object has not prototype, deleted toString method can not be found in prototype chain;
 */

//CHECK#1
if (Object.prototype.toString() == false) {
  $ERROR('#1: Object prototype object has not prototype');
}

delete Object.prototype.toString;

// CHECK#2
try {
  Object.prototype.toString();
  $ERROR('#2: Object prototype object has not prototype');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.1: delete Object.prototype.toString; Object.prototype.toString() throw a TypeError. Actual: ' + (e));  
  }
}
//

