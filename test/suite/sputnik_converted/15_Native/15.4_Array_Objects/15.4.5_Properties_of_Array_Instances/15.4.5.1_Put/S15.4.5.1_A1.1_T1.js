// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.1_A1.1_T1;
 * @section: 15.4.5.1, 15.4;
 * @assertion: If ToUint32(length) !== ToNumber(length), throw RangeError;
 * @description: length in [4294967296, -1, 1.5]; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.1_A1.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.1_Put\S15.4.5.1_A1.1_T1.js",

assertion: "If ToUint32(length) !== ToNumber(length), throw RangeError",

description: "length in [4294967296, -1, 1.5]",

test: function testcase() {
   //CHECK#1
try {
  var x = [];
  x.length = 4294967296;
  $ERROR('#1.1: x = []; x.length = 4294967296 throw RangeError. Actual: x.length === ' + (x.length));
} catch(e) {    
  if ((e instanceof RangeError) !== true) {
    $ERROR('#1.2: x = []; x.length = 4294967296 throw RangeError. Actual: ' + (e));
  }    
}

//CHECK#2
try {
  x = [];
  x.length = -1;
  $ERROR('#2.1: x = []; x.length = -1 throw RangeError. Actual: x.length === ' + (x.length));
} catch(e) {    
  if ((e instanceof RangeError) !== true) {
    $ERROR('#2.2: x = []; x.length = -1 throw RangeError. Actual: ' + (e));
  }    
}

//CHECK#3
try {
  x = [];
  x.length = 1.5;
  $ERROR('#3.1: x = []; x.length = 1.5 throw RangeError. Actual: x.length === ' + (x.length));
} catch(e) {    
  if ((e instanceof RangeError) !== true) {
    $ERROR('#3.2: x = []; x.length = 1.5 throw RangeError. Actual: ' + (e));
  }    
}

 }
});

