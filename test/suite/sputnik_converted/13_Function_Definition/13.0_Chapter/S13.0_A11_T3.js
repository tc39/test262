// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A11_T3;
* @section: 13;
* @assertion: Since arguments property has attribute { DontDelete }, only its elements can be deleted;
* @description: Deleting arguments[i] and returning result of the operation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A11_T3",

path: "13_Function_Definition\13.0_Chapter\S13.0_A11_T3.js",

assertion: "Since arguments property has attribute { DontDelete }, only its elements can be deleted",

description: "Deleting arguments[i] and returning result of the operation",

test: function testcase() {
   function __func(){
    was_del=false;
    for (i=0; i < arguments.length; i++)
       was_del= was_del || delete arguments[i];
    return was_del;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!__func("A","B",1,2)) {
	$ERROR('#1: Since arguments property has attribute { DontDelete } elements of arguments can be deleted');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

