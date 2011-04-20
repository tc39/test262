// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A6_T4;
* @section: 11.8.6;
* @assertion: Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the "instanceof" operator consequently;
* @description: Checking if RelationalExpression is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A6_T4",

path: "11_Expressions\11.8_Relational_Operators\11.8.6_The_instanceof_operator\S11.8.6_A6_T4.js",

assertion: "Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the \"instanceof\" operator consequently",

description: "Checking if RelationalExpression is object",

test: function testcase() {
   MyFunct = function(){};
__my__funct = new MyFunct;


//CHECK#1
if (!(__my__funct instanceof MyFunct)){
	$ERROR('#1 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}

//CHECK#2
if (__my__funct instanceof Function){
	$ERROR('#2 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}

//CHECK#3
if (!(__my__funct instanceof Object)){
	$ERROR('#3 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}

//CHECK#4
try{
	__my__funct instanceof __my__funct;
	$ERROR('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}
catch(e){  
	if (e instanceof TypeError !== true) {
      $ERROR('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
	}
}

 }
});

