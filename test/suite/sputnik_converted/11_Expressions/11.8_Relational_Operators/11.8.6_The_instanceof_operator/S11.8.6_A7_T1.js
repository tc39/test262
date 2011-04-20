// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A7_T1;
* @section: 11.8.6;
* @assertion: When "instanceof" returns true it means that GetValue(RelationalExpression) is constructed with ShiftExpression;
* @description: Checking Object object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A7_T1",

path: "11_Expressions\11.8_Relational_Operators\11.8.6_The_instanceof_operator\S11.8.6_A7_T1.js",

assertion: "When \"instanceof\" returns true it means that GetValue(RelationalExpression) is constructed with ShiftExpression",

description: "Checking Object object",

test: function testcase() {
   var __obj={};

//CHECK#1
if (!(__obj instanceof Object)) {
	$ERROR('#1: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}

//CHECK#2
if (__obj.constructor !== Object) {
	$ERROR('#2: If instanceof returns true then GetValue(RelationalExpression) was constructed with ShiftExpression');
}

 }
});

