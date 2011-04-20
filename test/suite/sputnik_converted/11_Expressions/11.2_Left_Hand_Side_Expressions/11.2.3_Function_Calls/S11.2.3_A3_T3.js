// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.3_A3_T3;
* @section: 11.2.3;
* @assertion: If MemberExpression is not Object, throw TypeError;
* @description: Checking "string primitive" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.3_A3_T3",

path: "11_Expressions\11.2_Left_Hand_Side_Expressions\11.2.3_Function_Calls\S11.2.3_A3_T3.js",

assertion: "If MemberExpression is not Object, throw TypeError",

description: "Checking \"string primitive\" case",

test: function testcase() {
   //CHECK#1
try {
  "1"();
    $ERROR('#1.1: "1"() throw TypeError. Actual: ' + ("1"()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: "1"() throw TypeError. Actual: ' + (e));	
  }
}

//CHECK#2
try {
  var x = "1";
  x();
    $ERROR('#2.1: var x = "1"; x() throw TypeError. Actual: ' + (x()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var x = "1"; x() throw TypeError. Actual: ' + (e));	
  }
}

 }
});

