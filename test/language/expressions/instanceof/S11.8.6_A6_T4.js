// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Only Function objects implement [[HasInstance]] and can be proper
    ShiftExpression for the "instanceof" operator consequently
es5id: 11.8.6_A6_T4
description: Checking if RelationalExpression is object
---*/

var MyFunct = function(){};
var __my__funct = new MyFunct;


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
