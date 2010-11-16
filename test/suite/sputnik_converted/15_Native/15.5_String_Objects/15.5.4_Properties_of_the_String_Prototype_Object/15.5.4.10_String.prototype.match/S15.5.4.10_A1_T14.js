// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T14;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Call match (regexp) function with RegExp object as argument from string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T14",

path: "15.5.4.10",

description: "Call match (regexp) function with RegExp object as argument from string",

test: function testcase() {
   var __reg = new RegExp("77");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB\u0037\u0037BBAA".match(__reg)[0] !== "77") {
  $ERROR('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".match(__reg)[0] === "77". Actual: '+("ABB\u0041BABAB\u0037\u0037BBAA".match(__reg)[0]) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

