// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The sort property of Array has the attribute DontEnum
 *
 * @section 15.4.4.11, 15.2.4.7, 12.6.4
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A7.5.js
 * @description Checking use propertyIsEnumerable, for-in
 */

//CHECK#1
if (Array.propertyIsEnumerable('sort') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'sort\') === false. Actual: ' + (Array.propertyIsEnumerable('sort')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "sort") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "sort") result = false; }  result === true;');
}


