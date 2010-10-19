// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A19_T2;
* @section: 13.2.2;
* @assertion: Function's scope chain is started when it is declared;
* @description: Function is declared in the object scope. Using "with" statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A19_T2",

path: "13.2.2",

description: "Function is declared in the object scope. Using \"with\" statement",

test: function testcase() {
   var a = 1;

var __obj = {a:2};

with (__obj)
{
    result = (function(){return a;})();
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (result !== 2) {
	$ERROR('#1: result === 2. Actual: result ==='+result);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

