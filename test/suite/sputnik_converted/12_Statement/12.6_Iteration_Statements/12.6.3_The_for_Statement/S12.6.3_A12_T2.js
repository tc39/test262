// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A12_T2;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "break" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a loop;
* @description: Embedded loops; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A12_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.3_The_for_Statement\S12.6.3_A12_T2.js",

assertion: "If (Evaluate Statement).type is \"break\" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a loop",

description: "Embedded loops",

test: function testcase() {
   __str="";

outer : for(index=0; index<4; index+=1) {
    nested : for(index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break nested;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str !== "00101120213031") {
	$ERROR('#1: __str === "00101120213031". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(index=0; index<4; index+=1) {
    nested : for(index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break outer;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "0010112021") {
	$ERROR('#2: __str === "0010112021". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////

__str="";

outer : for(index=0; index<4; index+=1) {
    nested : for(index_n=0; index_n<=index; index_n++) {
	if (index*index_n >= 4)break ;
	__str+=""+index+index_n;
    } 
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str !== "00101120213031") {
	$ERROR('#3: __str === "00101120213031". Actual:  __str ==='+ __str  );
}
//
//////////////////////////////////////////////////////////////////////////////




 }
});

