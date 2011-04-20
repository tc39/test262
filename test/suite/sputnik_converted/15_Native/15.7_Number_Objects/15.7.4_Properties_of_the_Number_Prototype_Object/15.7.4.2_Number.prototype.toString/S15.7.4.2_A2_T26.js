// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.4.2_A2_T26;
 * @section: 15.7.4.2;
 * @assertion: toString: If radix is an integer from 2 to 36, but not 10, 
 * the result is a string, the choice of which is implementation-dependent;
 * @description: radix is 28;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.4.2_A2_T26",

path: "15_Native\15.7_Number_Objects\15.7.4_Properties_of_the_Number_Prototype_Object\15.7.4.2_Number.prototype.toString\S15.7.4.2_A2_T26.js",

assertion: "toString: If radix is an integer from 2 to 36, but not 10,",

description: "radix is 28",

test: function testcase() {
   //CHECK#1
if(Number.prototype.toString(28) !== "0"){
  $ERROR('#1: Number.prototype.toString(28) === "0"');
}

//CHECK#2
if((new Number()).toString(28) !== "0"){
  $ERROR('#2: (new Number()).toString(28) === "0"');
}

//CHECK#3
if((new Number(0)).toString(28) !== "0"){
  $ERROR('#3: (new Number(0)).toString(28) === "0"');
}

//CHECK#4
if((new Number(-1)).toString(28) !== "-1"){
  $ERROR('#4: (new Number(-1)).toString(28) === "-1"');
}

//CHECK#5
if((new Number(1)).toString(28) !== "1"){
  $ERROR('#5: (new Number(1)).toString(28) === "1"');
}

//CHECK#6
if((new Number(Number.NaN)).toString(28) !== "NaN"){
  $ERROR('#6: (new Number(Number.NaN)).toString(28) === "NaN"');
}

//CHECK#7
if((new Number(Number.POSITIVE_INFINITY)).toString(28) !== "Infinity"){
  $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).toString(28) === "Infinity"');
}

//CHECK#8
if((new Number(Number.NEGATIVE_INFINITY)).toString(28) !== "-Infinity"){
  $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).toString(28) === "-Infinity"');
}

 }
});

