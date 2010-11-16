// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A2_T9;
* @section: 15.5.4.11;
* @assertion: The $ replacements are done left-to-right, and, once such are placement is performed, the new 
* replacement text is not subject to further replacements;
* @description: Use $` in replaceValue, searchValue is regular expression /sh/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A2_T9",

path: "15.5.4.11",

description: "Use $` in replaceValue, searchValue is regular expression /sh/",

test: function testcase() {
   var __str = 'She sells seashells by the seashore.';
var __re = /sh/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, "$`" + 'sch')!=='She sells seaShe sells seaschells by the seashore.') {
  $ERROR('#1: var __str = \'She sells seashells by the seashore.\'; var __re = /sh/; __str.replace(__re, "$`" + \'sch\')===\'She sells seaShe sells seaschells by the seashore.\'. Actual: '+__str.replace(__re, "$`" + 'sch'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

