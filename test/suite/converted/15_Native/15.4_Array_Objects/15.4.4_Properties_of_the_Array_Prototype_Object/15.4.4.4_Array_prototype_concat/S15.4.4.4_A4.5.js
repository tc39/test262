// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The concat property of Array has the attribute DontEnum
 *
 * @section: 15.4.4.4, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.4_Array_prototype_concat/S15.4.4.4_A4.5.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (Array.propertyIsEnumerable('concat') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'concat\') === false. Actual: ' + (Array.propertyIsEnumerable('concat')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "concat") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "concat") result = false; }  result === true;');
}


