// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T13;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Call replace (searchValue, replaceValue) function with objects arguments of string. 
* First objects have overrided toString and valueOf functions. 
* Second objects have overrided toString function, that throw exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T13",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A1_T13.js",

assertion: "String.prototype.replace (searchValue, replaceValue)",

description: "Call replace (searchValue, replaceValue) function with objects arguments of string.",

test: function testcase() {
   var __obj = {toString:function(){return {};}, valueOf:function(){return 1;}};
var __obj2 = {toString:function(){throw "inreplaceValue";}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
    var x = "ABB\u0041BABAB\u0031BBAA".replace(__obj, __obj2);
    $FAIL('#1: var x = "ABB\\u0041BABAB\\u0031BBAA".replace(__obj,__obj2) lead to throwing exception');
} catch (e) {
    if (e!=="inreplaceValue") {
        $ERROR('#1.1: Exception === "inreplaceValue". Actual: '+e);
    }
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

