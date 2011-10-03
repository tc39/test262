// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toLocaleString has the attribute DontEnum
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.3_Array_prototype_toLocaleString/S15.4.4.3_A4.1.js
 * @description Checking use propertyIsEnumerable, for-in
 */

//CHECK#1
if (Array.prototype.toLocaleString.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: Array.prototype.toLocaleString.propertyIsEnumerable(\'length\') === false. Actual: ' + (Array.prototype.toLocaleString.propertyIsEnumerable('length')));
}

//CHECK#2
var result = true;
for (var p in Array.toLocaleString){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array.toLocaleString) { if (p === "length") result = false; }  result === true;');
}


