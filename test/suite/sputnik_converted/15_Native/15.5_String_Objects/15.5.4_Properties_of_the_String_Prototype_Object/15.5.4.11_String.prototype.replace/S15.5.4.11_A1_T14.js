// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T14;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Instance is string, searchValue is regular expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T14",

path: "15.5.4.11",

description: "Instance is string, searchValue is regular expression",

test: function testcase() {
   var __reg = new RegExp("77");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB\u0037\u0037BBAA".replace(__reg, 1) !== "ABBABABAB\u0031BBAA") {
  $ERROR('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".replace(__reg, 1) === "ABBABABAB\\u0031BBAA". Actual: '+("ABB\u0041BABAB\u0037\u0037BBAA".replace(__reg, 1)) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

