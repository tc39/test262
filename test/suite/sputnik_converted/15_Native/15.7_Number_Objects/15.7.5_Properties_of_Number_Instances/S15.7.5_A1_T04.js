// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.5_A1_T04;
 * @section: 15.7.5;
 * @assertion: Number instances have no special properties beyond those 
 * inherited from the Number prototype object;
 * @description: Checking property valueOf;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.5_A1_T04",

path: "15.7.5",

description: "Checking property valueOf",

test: function testcase() {
   //CHECK#1
if((new Number()).hasOwnProperty("valueOf") !== false){
  $ERROR('#1: Number instance must have no special property "valueOf"');
}

//CHECK#2
if((new Number()).valueOf !== Number.prototype.valueOf){
  $ERROR('#2: Number instance property "valueOf" must be inherited from Number prototype object');
}


 }
});

