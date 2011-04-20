// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T11;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Override toString function, toString throw exception, then call toLowerCase() function for this object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T11",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.16_String.prototype.toLowerCase\S15.5.4.16_A1_T11.js",

assertion: "String.prototype.toLowerCase()",

description: "Override toString function, toString throw exception, then call toLowerCase() function for this object",

test: function testcase() {
   var __obj = {toString:function(){throw "intostr";}}
__obj.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLowerCase();
   	$FAIL('#1: "var x = __obj.toLowerCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

