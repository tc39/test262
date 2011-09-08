// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of unshift has the attribute DontEnum
 *
 * @section: 15.4.4.13, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.13_Array_prototype_unshift/S15.4.4.13_A5.1.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (Array.prototype.unshift.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: Array.prototype.unshift.propertyIsEnumerable(\'length\') === false. Actual: ' + (Array.prototype.unshift.propertyIsEnumerable('length')));
}

//CHECK#2
var result = true;
for (var p in Array.unshift){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array.unshift) { if (p === "length") result = false; }  result === true;');
}


