// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A12;
* @section: 15.10.6.2;
* @assertion: regExp exec() acts like regExp.exec('undefined') (step 2);
* @description: Checking RegExp.prototype.exec.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A12",

path: "TestCases/15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A12.js",

assertion: "regExp exec() acts like regExp.exec(\'undefined\') (step 2)",

description: "Checking RegExp.prototype.exec.length",

test: function testcase() {
   (/foo/).test('xfoox');
var match = new RegExp('(.|\r|\n)*','').exec()[0];
if (match === 'xfoox') {
  $FAIL('#1: regExp.exec() leaks match globally');
}
if (match !== 'undefined') {
  $FAIL('#2: regExp.exec() must coerce absent first arg to "undefined"');
}

 }
});

