// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A4.2_T3;
 * @section: 15.1.2.2;
 * @assertion: If R < 2 or R > 36, then return NaN;  
 * @description: Complex test;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A4.2_T3",

path: "15.1.2.2",

description: "Complex test",

test: function testcase() {
   //CHECK#
var pow = 2;
for (var i = 1; i < 32; i++) {   
  if (pow > 36) {  
    var res = true;  
    if (isNaN(parseInt(1, pow)) !== true) {
      $ERROR('#1.' + i + ': If R < 2 or R > 36, then return NaN');
    }
    if (isNaN(parseInt(1, -pow)) !== true) {
      $ERROR('#2.' + i + ': If R < 2 or R > 36, then return NaN');
    }
  }
  pow = pow * 2;                        
}    

 }
});

