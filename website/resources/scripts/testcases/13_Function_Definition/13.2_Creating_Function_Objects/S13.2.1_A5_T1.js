// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A5_T1;
* @section: 13.2.1;
* @assertion: Closures are admitted;
* @description: Sorting with closure;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A5_T1",

path: "13.2.1",

description: "Sorting with closure",

test: function testcase() {
   var __arr = [4,3,2,1,4,3,2,1,4,3,2,1];
//Sort uses closure
//
__arr.sort(
	function(x,y) { 
		if (x>y){return -1;} 
		if (x<y){return 1;} 
		if (x==y){return 0;} 
	}
);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__arr.toString() !== [4,4,4,3,3,3,2,2,2,1,1,1].toString()) {
	$ERROR('#1: __arr.toString() === [4,4,4,3,3,3,2,2,2,1,1,1].toString(). Actual: __arr.toString() ==='+__arr.toString());
}

//
//////////////////////////////////////////////////////////////////////////////  

 }
});

