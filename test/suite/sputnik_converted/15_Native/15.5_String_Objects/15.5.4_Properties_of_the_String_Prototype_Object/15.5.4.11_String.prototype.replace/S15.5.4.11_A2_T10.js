// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A2_T10;
* @section: 15.5.4.11;
* @assertion: The $ replacements are done left-to-right, and, once such are placement is performed, the new 
* replacement text is not subject to further replacements;
* @description: Use $' in replaceValue, searchValue is regular expression /sh/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A2_T10",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A2_T10.js",

assertion: "The $ replacements are done left-to-right, and, once such are placement is performed, the new",

description: "Use $\' in replaceValue, searchValue is regular expression /sh/",

test: function testcase() {
   var __str = 'She sells seashells by the seashore.';
var __re = /sh/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, "$'" + 'sch')!=='She sells seaells by the seashore.schells by the seashore.') {
  $ERROR('#1: var __str = \'She sells seashells by the seashore.\'; var __re = /sh/; __str.replace(__re, "$\'" + \'sch\')===\'She sells seaells by the seashore.schells by the seashore.\'. Actual: '+__str.replace(__re, "$'" + 'sch'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

