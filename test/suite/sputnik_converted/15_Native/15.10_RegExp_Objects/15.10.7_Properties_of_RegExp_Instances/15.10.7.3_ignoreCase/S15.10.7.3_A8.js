// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.7.3_A8;
* @section: 15.10.7.3;
* @assertion: The RegExp instance ignoreCase property has the attribute DontEnum;
* @description: Checking if enumerating the ignoreCase property of RegExp instance fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.7.3_A8",

path: "15_Native\15.10_RegExp_Objects\15.10.7_Properties_of_RegExp_Instances\15.10.7.3_ignoreCase\S15.10.7.3_A8.js",

assertion: "The RegExp instance ignoreCase property has the attribute DontEnum",

description: "Checking if enumerating the ignoreCase property of RegExp instance fails",

test: function testcase() {
   __re = new RegExp("[|||||||]","");

//CHECK#0
if (__re.hasOwnProperty('ignoreCase') !== true) {
  $FAIL('#0: __re = new RegExp("[|||||||]",""); __re.hasOwnProperty(\'ignoreCase\') === true');
}

 //CHECK#1
if (__re.propertyIsEnumerable('ignoreCase') !== false) {
  $ERROR('#1: __re = new RegExp("[|||||||]",""); __re.propertyIsEnumerable(\'ignoreCase\') === false');
}

 //CHECK#2
count = 0
for (p in __re){
  if (p==="ignoreCase") count++   
}

if (count !== 0) {
  $ERROR('#2: count = 0; __re = new RegExp("[|||||||]",""); for (p in __re){ if (p==="ignoreCase") count++; } count === 0. Actual: ' + (count));
} 

 }
});

