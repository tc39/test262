// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A7_T2;
* @section: 13;
* @assertion: The FunctionBody must be SourceElements;
* @description: Inserting elements that is different from SourceElements into the FunctionBody;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A7_T2",

path: "13_Function_Definition\13.0_Chapter\S13.0_A7_T2.js",

assertion: "The FunctionBody must be SourceElements",

description: "Inserting elements that is different from SourceElements into the FunctionBody",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	eval("function __func(){/ ABC}");
	$ERROR('#1: eval("function __func(){/ ABC}") lead to throwing exception');
} catch(e){
	if(!(e instanceof SyntaxError)){
		$ERROR('#1.1: eval("function __func(){/ ABC}") lead to throwing exception of SyntaxError. Actual: exception is '+e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try{
	eval("function __func(){&1}");
	$ERROR('#3: eval("function __func(){&1}") lead to throwing exception');
} catch(e){
	if(!(e instanceof SyntaxError)){
		$ERROR('#3.1: eval("function __func(){&1}") lead to throwing exception of SyntaxError. Actual: exception is '+e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
try{
	eval("function __func(){# ABC}");
	$ERROR('#4: eval("function __func(){# ABC}") lead to throwing exception');
} catch(e){
	if(!(e instanceof SyntaxError)){
		$ERROR('#4.1: eval("function __func(){# ABC}") lead to throwing exception of SyntaxError. Actual: exception is '+e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

