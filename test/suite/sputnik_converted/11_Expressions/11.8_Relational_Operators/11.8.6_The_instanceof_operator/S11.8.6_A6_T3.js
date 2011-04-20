// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A6_T3;
* @section: 11.8.6;
* @assertion: Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the "instanceof" operator consequently;
* @description: Checking if RelationalExpression is function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A6_T3",

path: "11_Expressions\11.8_Relational_Operators\11.8.6_The_instanceof_operator\S11.8.6_A6_T3.js",

assertion: "Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the \"instanceof\" operator consequently",

description: "Checking if RelationalExpression is function",

test: function testcase() {
   function MyFunct(){return 0};

//CHECK#1
if (MyFunct instanceof MyFunct){
	$ERROR('#1 function MyFunct(){return 0}; MyFunct instanceof MyFunct === false');
}

//CHECK#2
if (MyFunct instanceof Function !== true){
	$ERROR('#2 function MyFunct(){return 0}; MyFunct instanceof Function === true');
}

//CHECK#3
if (MyFunct instanceof Object !== true){
	$ERROR('#3 function MyFunct(){return 0}; MyFunct instanceof Object === true');
}

 }
});

