// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A18_T1;
 * @section: 12.14, 12.13;
 * @assertion: Catching objects with try/catch/finally statement;
 * @description: Catching undefined; 
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A18_T1",

path: "12_Statement\12.14_The_try_Statement\S12.14_A18_T1.js",

assertion: "Catching objects with try/catch/finally statement",

description: "Catching undefined",

test: function testcase() {
   // CHECK#1
try{
  throw undefined;
}
catch(e){
  if (e!==undefined) $ERROR('#1: Exception === undefined. Actual: '+e);
}

 }
});

