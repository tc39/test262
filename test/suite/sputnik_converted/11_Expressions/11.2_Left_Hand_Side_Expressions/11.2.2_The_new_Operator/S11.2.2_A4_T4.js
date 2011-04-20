// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.2_A4_T4;
* @section: 11.2.2;
* @assertion: If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError;
* @description: Checking Global object case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.2_A4_T4",

path: "11_Expressions\11.2_Left_Hand_Side_Expressions\11.2.2_The_new_Operator\S11.2.2_A4_T4.js",

assertion: "If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError",

description: "Checking Global object case",

test: function testcase() {
   //CHECK#1
try {
  new this;
  $ERROR('#1: new this throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1: new this throw TypeError');	
  }
}

//CHECK#2
try {
  new this();
  $ERROR('#2: new this() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2: new this() throw TypeError'); 
  }
}

 }
});

