// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since the Object prototype object is not a function, it has not [[create]] method
 *
 * @section: 15.2.4;
 * @path: 15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/S15.2.4_A4.js;
 * @description: Checking if creating "new Object.prototype" fails;
 */

//CHECK#1
try {
  instance = new Object.prototype;
  $FAIL('#1: Since Object prototype object is not function it has not [[create]] method');
} catch (e) {
  $PRINT(e);
}

