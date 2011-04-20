// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.3_A1_T1;
 * @section: 15.9.4.3;
 * @assertion: The Date property "UTC" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.3_A1_T1",

path: "15_Native\15.9_Date_Objects\15.9.4_Properties_of_the_Date_Constructor\15.9.4.3_Date.UTC\S15.9.4.3_A1_T1.js",

assertion: "The Date property \"UTC\" has { DontEnum } attributes",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.UTC;
if(x === 1)
  Date.UTC = 2;
else
  Date.UTC = 1;
if (Date.UTC === x) {
  $ERROR('#1: The Date.UTC has not the attribute ReadOnly');
}


 }
});

