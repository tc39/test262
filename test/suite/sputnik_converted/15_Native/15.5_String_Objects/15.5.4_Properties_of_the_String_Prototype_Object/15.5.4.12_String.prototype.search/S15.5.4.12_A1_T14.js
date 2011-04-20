// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T14;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Instance is string, argument is regular expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T14",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A1_T14.js",

assertion: "String.prototype.search (regexp)",

description: "Instance is string, argument is regular expression",

test: function testcase() {
   var __reg = new RegExp("77");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg) !== 9) {
  $ERROR('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".search(__reg) === 9. Actual: '+("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg)) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

