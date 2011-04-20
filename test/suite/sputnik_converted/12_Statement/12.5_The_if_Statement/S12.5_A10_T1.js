// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A10_T1;
* @section: 12.5;
* @assertion: Function expession inside the "if" expression is allowed;
* @description: Using function expession(function __func(){return 0;}) inside the "if" expression ;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A10_T1",

path: "12_Statement\12.5_The_if_Statement\S12.5_A10_T1.js",

assertion: "Function expession inside the \"if\" expression is allowed",

description: "Using function expession(function __func(){return 0;}) inside the \"if\" expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#
if(function __func(){return 0;}){
    ;
}else {
    $ERROR('#1: Function expession inside the "if" expression is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

