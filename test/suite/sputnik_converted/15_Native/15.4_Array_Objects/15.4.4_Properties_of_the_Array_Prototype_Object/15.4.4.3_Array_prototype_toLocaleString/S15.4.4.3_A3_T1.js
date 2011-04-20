// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.3_A3_T1;
 * @section: 15.4.4.3, 8.6.2.1;
 * @assertion: [[Get]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.3_A3_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.3_Array_prototype_toLocaleString\S15.4.4.3_A3_T1.js",

assertion: "[[Get]] from not an inherited property",

description: "[[Prototype]] of Array instance is Array.prototype",

test: function testcase() {
   //CHECK#1
var n = 0;
var obj = {toLocaleString: function() {n++}};
Array.prototype[1] = obj;
var x = [obj];
x.length = 2;
x.toLocaleString();
if (n !== 2) {  
  $ERROR('#1: var n = 0; var obj = {toLocaleString: function() {n++}}; Array.prototype[1] = obj; x = [obj]; x.length = 2; x.toLocaleString(); n === 2. Actual: ' + (n));    
}

 }
});

