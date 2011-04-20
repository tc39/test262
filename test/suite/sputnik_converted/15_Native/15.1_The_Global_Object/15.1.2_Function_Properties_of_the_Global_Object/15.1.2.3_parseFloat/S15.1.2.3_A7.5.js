// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A7.5;
 * @section: 15.1.2.3, 15.2.4.7, 12.6.4;
 * @assertion: The parseFloat property has the attribute DontEnum;
 * @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A7.5",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A7.5.js",

assertion: "The parseFloat property has the attribute DontEnum",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (this.propertyIsEnumerable('parseFloat') !== false) {
  $ERROR('#1:this.propertyIsEnumerable(\'parseFloat\') === false. Actual: ' + (this.propertyIsEnumerable('parseFloat')));
}

//CHECK#2
var result = true;
for (var p in this){
  if (p === "parseFloat") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "parseFloat") result = false; }  result === true;');
}

 }
});

