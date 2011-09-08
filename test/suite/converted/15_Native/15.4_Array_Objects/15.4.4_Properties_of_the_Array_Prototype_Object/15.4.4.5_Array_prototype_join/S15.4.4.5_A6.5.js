// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The join property of Array has the attribute DontEnum
 *
 * @section: 15.4.4.5, 15.2.4.7, 12.6.4;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.5_Array_prototype_join/S15.4.4.5_A6.5.js;
 * @description: Checking use propertyIsEnumerable, for-in;
 */

//CHECK#1
if (Array.propertyIsEnumerable('join') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'join\') === false. Actual: ' + (Array.propertyIsEnumerable('join')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "join") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "join") result = false; }  result === true;');
}


