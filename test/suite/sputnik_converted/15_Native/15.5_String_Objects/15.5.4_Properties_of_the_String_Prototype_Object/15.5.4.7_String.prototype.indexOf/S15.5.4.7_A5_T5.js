// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A5_T5;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf works properly;
* @description: Search substring from it`s position in the string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A5_T5",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.7_String.prototype.indexOf\S15.5.4.7_A5_T5.js",

assertion: "String.prototype.indexOf works properly",

description: "Search substring from it`s position in the string",

test: function testcase() {
   var TEST_STRING = new String( " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" );

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for ( var k = 0, i = 0x0020; i < 0x007d; i++, k++ ) {
    if (TEST_STRING.indexOf( (String.fromCharCode(i)+ String.fromCharCode(i+1)+ String.fromCharCode(i+2)),k ) !==k) {
      $ERROR('#'+(i-0x0020)+': TEST_STRING.indexOf( (String.fromCharCode('+i+')+ String.fromCharCode('+(i+1)+') + String.fromCharCode('+(i+2)+')), '+k+' )==='+k+'. Actual: '+TEST_STRING.indexOf( (String.fromCharCode(i)+ String.fromCharCode(i+1) + String.fromCharCode(i+2)), k )); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

