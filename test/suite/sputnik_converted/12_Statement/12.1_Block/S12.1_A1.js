// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.1_A1;
* @section: 12.1;
* @assertion: The production Block { } in strict code can't contain function declaration;
* @description: Trying to declare function at the Block statement;
* @negative SyntaxError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.1_A1",

path: "TestCases/12_Statement/12.1_Block/S12.1_A1.js",

assertion: "The production Block { } in strict code can\'t contain function declaration",

description: "Trying to declare function at the Block statement",

test: function testcase() {
   "use strict";
if (!strict_mode) { throw new SyntaxError('unspecified case'); }

{
    function __func(){}
}

 }
});

