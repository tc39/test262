// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3_A3_T1;
* @section: 15.3;
* @assertion: Since when call is used for Function constructor themself new function instance creates 
* and then first argument(thisArg) should be ignored;
* @description: First argument is object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3_A3_T1",

path: "15_Native\15.3_Function_Objects\S15.3_A3_T1.js",

assertion: "Since when call is used for Function constructor themself new function instance creates",

description: "First argument is object",

test: function testcase() {
   //CHECK#1
try{
  var f = Function.call(mars, "return name;");
  $ERROR('#1: When applied to the Function object itself, thisArg should be ignored');
} catch(e){
  if (!(e instanceof ReferenceError)) {
  	$ERROR('#1.1: When applied to the Function object itself, thisArg should be ignored');
  }
} 

var mars={name:"mars", color:"red", number:4};

var f = Function.call(mars, "this.godname=\"ares\"; return this.color;");

var about_mars = f();

//CHECK#2
if (about_mars !== undefined) {
  $ERROR('#2: When applied to the Function object itself, thisArg should be ignored');
}

//CHECK#3
if (this.godname !== "ares") {
  $ERROR('#3: When applied to the Function object itself, thisArg should be ignored');
}

 }
});

