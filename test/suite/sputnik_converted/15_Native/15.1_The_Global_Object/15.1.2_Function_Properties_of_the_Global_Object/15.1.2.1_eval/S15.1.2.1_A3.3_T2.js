// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A3.3_T2;
 * @section: 15.1.2.1, 12.8;
 * @assertion: If Result(3).type is not normal, then Result(3).type must be throw.
 * Throw Result(3).value as an exception; 
 * @description: Break statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A3.3_T2",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.1_eval\S15.1.2.1_A3.3_T2.js",

assertion: "If Result(3).type is not normal, then Result(3).type must be throw.",

description: "Break statement",

test: function testcase() {
   //CHECK#1
try {
  eval("break;");
  $ERROR('#1.1: break must throw SyntaxError. Actual: ' + (eval("break;")));
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {
    $ERROR('#1.2: break must throw SyntaxError. Actual: ' + (e));
  }  
}

//CHECK#2
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
       eval("break;");
    }
  }
  $ERROR('#2.1: break must throw SyntaxError. Actual: ' + (eval("break;")));    
} catch(e) {
  if ((e instanceof SyntaxError) !== true) {   
    $ERROR('#2.2: break must throw SyntaxError. Actual: ' + (e));
  }  
}      

 }
});

