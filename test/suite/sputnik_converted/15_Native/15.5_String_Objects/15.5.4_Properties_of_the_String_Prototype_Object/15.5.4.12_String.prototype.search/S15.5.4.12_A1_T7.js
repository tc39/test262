// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T7;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is undefined, and instance is new String;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T7",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.12_String.prototype.search\S15.5.4.12_A1_T7.js",

assertion: "String.prototype.search (regexp)",

description: "Argument is undefined, and instance is new String",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" search(undefined) evaluates to search("undefined")
if (String("undefined").search(undefined) !== 0) {
  $ERROR('#1: String("undefined").search(undefined) === 0. Actual: '+String("undefined").search(undefined) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

