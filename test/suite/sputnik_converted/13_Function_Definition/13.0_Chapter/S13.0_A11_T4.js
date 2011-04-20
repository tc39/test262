// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A11_T4;
* @section: 13;
* @assertion: Since arguments property has attribute { DontDelete }, only its elements can be deleted;
* @description: Deleting arguments[i] and checking the type of arguments[i];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A11_T4",

path: "13_Function_Definition\13.0_Chapter\S13.0_A11_T4.js",

assertion: "Since arguments property has attribute { DontDelete }, only its elements can be deleted",

description: "Deleting arguments[i] and checking the type of arguments[i]",

test: function testcase() {
   function __func(){
    is_undef=true;
    for (i=0; i < arguments.length; i++)
    {
        delete arguments[i];
        is_undef= is_undef && (typeof arguments[i] === "undefined");
    };       
    return is_undef;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!__func("A","B",1,2)) {
	$ERROR('#1: Since arguments property has attribute { DontDelete }, but elements of arguments can be deleted');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

