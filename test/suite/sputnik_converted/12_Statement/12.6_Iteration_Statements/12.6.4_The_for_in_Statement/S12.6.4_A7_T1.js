// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A7_T1;
* @section: 12.6.4;
* @assertion: Properties of the object being enumerated may be deleted during enumeration;
* @description: Checking "for (LeftHandSideExpression in Expression) Statement" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A7_T1",

path: "12_Statement\12.6_Iteration_Statements\12.6.4_The_for_in_Statement\S12.6.4_A7_T1.js",

assertion: "Properties of the object being enumerated may be deleted during enumeration",

description: "Checking \"for (LeftHandSideExpression in Expression) Statement\" case",

test: function testcase() {
   __obj={aa:1,ba:2,ca:3};

__accum="";

for (__key in __obj){
	
    erasator_T_1000(__obj,"b");
  
	__accum+=(__key+__obj[__key]);
	
}


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!((__accum.indexOf("aa1")!==-1)&&(__accum.indexOf("ca3")!==-1))) {
	$ERROR('#1: (__accum.indexOf("aa1")!==-1)&&(__accum.indexOf("ca3")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__accum.indexOf("ba2")!==-1) {
	$ERROR('#2: __accum.indexOf("ba2") === -1. Actual:  __accum.indexOf("ba2") ==='+ __accum.indexOf("ba2")  );
}
//
//////////////////////////////////////////////////////////////////////////////


// erasator is the hash map terminator
function erasator_T_1000(hash_map, charactr){
	for (key in hash_map){
		if (key.indexOf(charactr)===0) {
			delete hash_map[key];
		};
	}
}

 }
});

