// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object.prototype property has the attribute DontEnum
 *
 * @section 15.2.3.1, 15.2.4
 * @path 15_Native/15.2_Object_Objects/15.2.3_Properties_of_the_Object_Constructor/15.2.3.1_Object.prototype/S15.2.3.1_A2.js
 * @description Checking if enumerating "Object.prototype" property fails
 */

// CHECK#1
if (Object.propertyIsEnumerable('prototype')) {
  $ERROR('#1: the Object.prototype property has the attributes DontEnum');
}

// CHECK#2
var cout=0;

for (p in Object){
  if (p==="prototype") cout++;
}

if (cout !== 0) {
  $ERROR('#2: the Object.prototype property has the attributes DontEnum');
}

