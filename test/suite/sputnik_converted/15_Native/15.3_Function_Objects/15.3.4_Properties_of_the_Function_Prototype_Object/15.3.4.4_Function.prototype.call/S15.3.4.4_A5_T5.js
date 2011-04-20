// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A5_T5;
* @section: 15.3.4.4;
* @assertion: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value;
* @description: thisArg is function variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A5_T5",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.4_Function.prototype.call\S15.3.4.4_A5_T5.js",

assertion: "If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value",

description: "thisArg is function variable",

test: function testcase() {
   var f = function(){this.touched= true;};

var obj={};

f.call(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

 }
});

