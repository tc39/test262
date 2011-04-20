// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.8_A2_T2;
* @section: 8.8;
* @assertion: Values of the List type are simply ordered sequences of values;
* @description: Call function __mFunc([,,]) with 1 arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.8_A2_T2",

path: "08_Types\8.8_The_List_Type\S8.8_A2_T2.js",

assertion: "Values of the List type are simply ordered sequences of values",

description: "Call function __mFunc([,,]) with 1 arguments",

test: function testcase() {
   function __mFunc(){return arguments.length;};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__mFunc([,,]) !== 1){
  $ERROR('#1: function __mFunc(){return arguments.length;}; __mFunc([,,]) === 1. Actual: ' + (__mFunc([,,])));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

