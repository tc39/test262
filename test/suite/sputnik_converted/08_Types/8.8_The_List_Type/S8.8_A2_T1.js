// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.8_A2_T1;
* @section: 8.8;
* @assertion: Values of the List type are simply ordered sequences of values;
* @description: Call function __mFunc(1,2,3) with 3 arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.8_A2_T1",

path: "08_Types\8.8_The_List_Type\S8.8_A2_T1.js",

assertion: "Values of the List type are simply ordered sequences of values",

description: "Call function __mFunc(1,2,3) with 3 arguments",

test: function testcase() {
   function __mFunc(){return arguments.length;};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__mFunc(1,2,3) !== 3){
  $ERROR('#1: function __mFunc(){return arguments.length;}; __mFunc(1,2,3) === 3. Actual: ' + (__mFunc(1,2,3)));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

