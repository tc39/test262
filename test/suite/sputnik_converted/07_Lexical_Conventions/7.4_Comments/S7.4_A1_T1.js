// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.4_A1_T1;
 * @section: 7.4;
 * @assertion: Correct interpretation of single line comments;
 * @description: Create comments with any code;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.4_A1_T1",

path: "07_Lexical_Conventions\7.4_Comments\S7.4_A1_T1.js",

assertion: "Correct interpretation of single line comments",

description: "Create comments with any code",

test: function testcase() {
   //CHECK#1
// $ERROR('#1: Correct interpretation single line comments');

//CHECK#2
var x = 0;
// x = 1;
if (x !== 0) {
  $ERROR('#2: var x = 0; // x = 1; x === 0. Actual: ' + (x));
}

//CHECK#3
var // y = 1; 
y;
if (y !== undefined) {
  $ERROR('#3: var // y = 1; \\n y; y === undefined. Actual: ' + (y));
}  

//CHECK#4
//$ERROR('#4: Correct interpretation single line comments') //$ERROR('#4: Correct interpretation single line comments'); //

////CHECK#5
//var x = 1;
//if (x === 1) {
//  $ERROR('#5: Correct interpretation single line comments');
//}

//CHECK#6
//var this.y = 1; 
this.y++;
if (isNaN(y) !== true) {
  $ERROR('#6: //var this.y = 1; \\n this.y++; y === Not-a-Number. Actual: ' + (y));
}


 }
});

