// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A2.3_T1;
 * @section: 11.8.2;
 * @assertion: ToNumber(second expression) is called first, and then ToNumber(first expression);
 * @description: Checking with "throw";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A2.3_T1",

path: "11_Expressions\11.8_Relational_Operators\11.8.2_The_Greater_than_Operator\S11.8.2_A2.3_T1.js",

assertion: "ToNumber(second expression) is called first, and then ToNumber(first expression)",

description: "Checking with \"throw\"",

test: function testcase() {
   //CHECK#1
var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x > y;
   $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x > y throw "y". Actual: ' + (x > y));
} catch (e) {
   if (e === "x") {
     $ERROR('#1.2: ToNumber(second expression) is called first, and then ToNumber(first expression)');
   } else {
     if (e !== "y") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x > y throw "y". Actual: ' + (e));
     }
   }
}

 }
});

