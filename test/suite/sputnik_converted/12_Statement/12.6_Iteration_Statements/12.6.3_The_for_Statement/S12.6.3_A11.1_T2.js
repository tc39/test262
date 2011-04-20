// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A11.1_T2;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "continue" and (Evaluate Statement).target is in the current label set, iteration of labeled "var-loop" breaks;
* @description: Embedded loops;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A11.1_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.3_The_for_Statement\S12.6.3_A11.1_T2.js",

assertion: "If (Evaluate Statement).type is \"continue\" and (Evaluate Statement).target is in the current label set, iteration of labeled \"var-loop\" breaks",

description: "Embedded loops",

test: function testcase() {
   __str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n == 6)continue nested;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str !== "001011202122303133") {
	$ERROR('#1: __str === "001011202122303133". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n == 6)continue outer;
	__str+=""+index+index_n;
    } 
}
//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "0010112021223031") {
	$ERROR('#2: __str === "0010112021223031". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(var index=0; index<4; index+=1) {
    nested : for(var index_n=0; index_n<=index; index_n++) {
	if (index*index_n == 6)continue ;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str !== "001011202122303133") {
	$ERROR('#3: __str === "001011202122303133". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////




 }
});

