// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.2_A1.1_T1;
 * @section: 10.2;
 * @assertion: Every function call enters a new execution context;
 * @description: Sequence of function calls;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.2_A1.1_T1",

path: "10.2",

description: "Sequence of function calls",

test: function testcase() {
   var y;

function f(){
  var x;
  
  if(x === undefined) {
    x = 0;
  } else {
    x = 1;
  }
  
  return x;
}

y = f();
y = f();

if(!(y === 0)){
  $ERROR("#1: Sequenced function calls shares execution context");
}

 }
});

