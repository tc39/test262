// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of reverse has the attribute DontEnum
 *
 * @section: 15.4.4.8, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.8_Array_prototype_reverse/S15.4.4.8_A5.1.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (Array.prototype.reverse.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: Array.prototype.reverse.propertyIsEnumerable(\'length\') === false. Actual: ' + (Array.prototype.reverse.propertyIsEnumerable('length')));
}

//CHECK#2
var result = true;
for (p in Array.reverse){
  if (p === "length") {
    var result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array.reverse) { if (p === "length") result = false; }  result === true;');
}


