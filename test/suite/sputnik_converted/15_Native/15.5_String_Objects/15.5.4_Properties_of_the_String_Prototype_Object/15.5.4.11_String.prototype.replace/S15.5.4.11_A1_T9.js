// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T9;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Call replace (searchValue, replaceValue) function with functions arguments of new String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T9",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.11_String.prototype.replace\S15.5.4.11_A1_T9.js",

assertion: "String.prototype.replace (searchValue, replaceValue)",

description: "Call replace (searchValue, replaceValue) function with functions arguments of new String object",

test: function testcase() {
   var __obj = {
    valueOf:function(){},
    toString:void 0
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String(__obj).replace(function(){}(),__func) !== "undefined0undefined") {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; function __func(a1,a2,a3){return a1+a2+a3;}; new String(__obj).replace(function(){}(),__func) === "undefined0undefined". Actual: '+new String(__obj).replace(function(){}(),__func) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(a1,a2,a3){return a1+a2+a3;};

 }
});

