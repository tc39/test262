// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.2_A1.1_T2;
 * @section: 10.2;
 * @assertion: Every function call enters a new execution context;
 * @description: Recursive function call;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.2_A1.1_T2",

path: "10_Execution_Contexts\10.2_Entering_An_Execution_Context\S10.2_A1.1_T2.js",

assertion: "Every function call enters a new execution context",

description: "Recursive function call",

test: function testcase() {
   var y;

function f(a){
  var x;
  
  if (a === 1) 
    return x;
  else {
    if(x === undefined) {
      x = 0;
    } else {
      x = 1;
    }
    return f(1);
  }
}

y = f(0);

if(!(y === undefined)){
  $ERROR("#1: Recursive function calls shares execution context");
}

 }
});

