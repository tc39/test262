// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A2.2_T2;
 * @section: 15.4.2.2;
 * @assertion: If the argument len is a Number and ToUint32(len) is not equal to len, 
 * a RangeError exception is thrown;
 * @description: Use try statement. len = NaN, +/-Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A2.2_T2",

path: "15_Native\15.4_Array_Objects\15.4.2_The_Array_Constructor\15.4.2.2_new_Array_len\S15.4.2.2_A2.2_T2.js",

assertion: "If the argument len is a Number and ToUint32(len) is not equal to len,",

description: "Use try statement. len = NaN, +/-Infinity",

test: function testcase() {
   //CHECK#1
try {  
  new Array(NaN);   
  $ERROR('#1.1: new Array(NaN) throw RangeError. Actual: ' + (new Array(NaN)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#1.2: new Array(NaN) throw RangeError. Actual: ' + (e));
  }
}

//CHECK#2
try {  
  new Array(Number.POSITIVE_INFINITY);   
  $ERROR('#2.1: new Array(Number.POSITIVE_INFINITY) throw RangeError. Actual: ' + (new Array(Number.POSITIVE_INFINITY)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#2.2: new Array(Number.POSITIVE_INFINITY) throw RangeError. Actual: ' + (e));
  }
}

//CHECK#3
try {  
  new Array(Number.NEGATIVE_INFINITY);   
  $ERROR('#3.1: new Array(Number.NEGATIVE_INFINITY) throw RangeError. Actual: ' + (new Array(Number.NEGATIVE_INFINITY)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#3.2: new Array(Number.NEGATIVE_INFINITY) throw RangeError. Actual: ' + (e));
  }
}

 }
});

