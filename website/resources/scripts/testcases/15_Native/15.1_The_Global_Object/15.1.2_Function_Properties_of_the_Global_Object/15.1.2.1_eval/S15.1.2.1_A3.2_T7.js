// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A3.2_T7;
 * @section: 15.1.2.1, 12.6.2;
 * @assertion: If Result(3).type is normal and its completion value is empty, 
 * then return the value undefined; 
 * @description: do-while statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A3.2_T7",

path: "15.1.2.1, 12.6.2",

description: "do-while statement",

test: function testcase() {
   //CHECK#1
if (eval("while(false);") !== undefined) {
  $ERROR('#1: eval("while(false);") === undefined. Actual: ' + (eval("while(false);")));
}    

 }
});

