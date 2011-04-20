// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A5_T7;
* @section: 15.3.4.4;
* @assertion: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value;
* @description: thisArg is new Number();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A5_T7",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.4_Function.prototype.call\S15.3.4.4_A5_T7.js",

assertion: "If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value",

description: "thisArg is new Number()",

test: function testcase() {
   var obj=new Number(1);

Function("this.touched= true;").call(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}


 }
});

