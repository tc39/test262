// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A10_T1;
 * @section: 12.14;
 * @assertion: Using "try" with "catch" or "finally" statement within/without a "while" statement;
 * @description: Throwing exception while executing iteration statement placed into try Block;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A10_T1",

path: "12_Statement\12.14_The_try_Statement\S12.14_A10_T1.js",

assertion: "Using \"try\" with \"catch\" or \"finally\" statement within/without a \"while\" statement",

description: "Throwing exception while executing iteration statement placed into try Block",

test: function testcase() {
   // CHECK#1
var i=0;
try{
while(i<10){
  if(i===5) throw i;
  i++;
}
}
catch(e){
  if(e!==5)$ERROR('#1: Exception === 5. Actual:  Exception ==='+ e  );
}

 }
});

