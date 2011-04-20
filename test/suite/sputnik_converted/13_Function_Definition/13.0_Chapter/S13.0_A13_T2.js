// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A13_T2;
* @section: 13;
* @assertion: Deleting arguments[i] leads to breaking the connection to local reference;
* @description: Changing arguments value and then deleting the argument;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A13_T2",

path: "13_Function_Definition\13.0_Chapter\S13.0_A13_T2.js",

assertion: "Deleting arguments[i] leads to breaking the connection to local reference",

description: "Changing arguments value and then deleting the argument",

test: function testcase() {
   function __func(__arg){
  __arg = 2;
  delete arguments[0];
  if (arguments[0] !== undefined) {
    $ERROR('#1.1: arguments[0] === undefined');
  }
  return __arg;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(1) !== 2) {
	$ERROR('#1.2: __func(1) === 2. Actual: __func(1) ==='+__func(1));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

