// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.3.1_A3_T1;
* @section: 15.11.3.1, 16;
* @assertion: Error.prototype property has the attributes {ReadOnly};
* @description: Checking if varying the Error.prototype property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.3.1_A3_T1",

path: "15_Native\15.11_Error_Objects\15.11.3_Properties_of_the_Error_Constructor\S15.11.3.1_A3_T1.js",

assertion: "Error.prototype property has the attributes {ReadOnly}",

description: "Checking if varying the Error.prototype property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(Error.hasOwnProperty('prototype'))) {
  $ERROR('#1: Error.hasOwnProperty(\'prototype\') return true. Actual: '+Error.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = Error.prototype;

Error.prototype = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (Error.prototype !== __obj) {
  $ERROR('#2: __obj = Error.prototype; Error.prototype = function(){return "shifted";}; Error.prototype === __obj. Actual: '+Error.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try {
  Error.prototype();
  $ERROR('#3: "Error.prototype()" lead to throwing exception');
} catch (e) {
  ;
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

