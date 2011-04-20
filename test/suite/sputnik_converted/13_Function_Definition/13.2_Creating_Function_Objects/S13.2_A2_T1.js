// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2_A2_T1;
* @section: 13.2;
* @assertion: Nested function are admitted;
* @description: Nesting level is two;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2_A2_T1",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2_A2_T1.js",

assertion: "Nested function are admitted",

description: "Nesting level is two",

test: function testcase() {
   var __JEDI="jedi";

function __FUNC(){
    function __GUNC(){
        return arguments[0];
    };
    
    return __GUNC;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__FUNC()(__JEDI) !== __JEDI) {
	$ERROR('#1: __FUNC()(__JEDI) === __JEDI. Actual: __FUNC()(__JEDI) ==='+__FUNC()(__JEDI));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

