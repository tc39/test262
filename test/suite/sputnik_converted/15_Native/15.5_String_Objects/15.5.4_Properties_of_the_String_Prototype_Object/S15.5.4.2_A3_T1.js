// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.2_A3_T1;
* @section: 15.5.4.2, 15.5.4.3;
* @assertion: String.prototype.toString() is equal String.prototype.valueOf();
* @description: Create new String() with various arguments and compare returned results of toString() and valueOf();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.2_A3_T1",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\S15.5.4.2_A3_T1.js",

assertion: "String.prototype.toString() is equal String.prototype.valueOf()",

description: "Create new String() with various arguments and compare returned results of toString() and valueOf()",

test: function testcase() {
   //CHECK#1
var str = new String();
if(!(str.valueOf() == str.toString()))
  $ERROR('#1: str = new String(),str.valueOf() == str.toString()');

//CHECK#2
str = new String(true);
if(!(str.valueOf() == str.toString()))
  $ERROR('#2: str = new String(true),str.valueOf() == str.toString()');

//CHECK#3
str = new String(false);
if(!(str.valueOf() == str.toString()))
  $ERROR('#3: str = new String(false),str.valueOf() == str.toString()');

//CHECK#4
str = new String(Math.PI);
if(!(str.valueOf() == str.toString()))
  $ERROR('#4: str = new String(Math.PI),str.valueOf() == str.toString()');

 }
});

