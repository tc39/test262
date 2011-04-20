// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.4.4_A2_T03;
 * @section: 15.7.4.4;
 * @assertion: The valueOf function is not generic, it cannot be transferred 
 * to other kinds of objects for use as a method and there is should be 
 * a TypeError exception if its this value is not a Number object;
 * @description: transferring to the Date objects;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.4.4_A2_T03",

path: "15_Native\15.7_Number_Objects\15.7.4_Properties_of_the_Number_Prototype_Object\15.7.4.4_Number.prototype.valueOf\S15.7.4.4_A2_T03.js",

assertion: "The valueOf function is not generic, it cannot be transferred",

description: "transferring to the Date objects",

test: function testcase() {
   //CHECK#1
try{
  var s1 = new Date();
  s1.valueOf = Number.prototype.valueOf;
  var v1 = s1.valueOf(); 
  $ERROR('#1: Number.prototype.valueOf on not a Number object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#1: Number.prototype.valueOf on not a Number object should throw TypeError, not '+e);
  }
}

//CHECK#2
try{
  var s2 = new Date();
  s2.myValueOf = Number.prototype.valueOf;
  var v2 = s2.myValueOf(); 
  $ERROR('#2: Number.prototype.valueOf on not a Number object should throw TypeError');
}
catch(e){
  if(!(e instanceof TypeError)){
    $ERROR('#2: Number.prototype.valueOf on not a Number object should throw TypeError, not '+e);
  }
}


 }
});

