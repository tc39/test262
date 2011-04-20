// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A4;
 * @section: 8.5, 7.8.3;
 * @assertion: NaN is not a keyword;
 * @description: Create variable entitled NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A4",

path: "08_Types\8.5_The_Number_Type\S8.5_A4.js",

assertion: "NaN is not a keyword",

description: "Create variable entitled NaN",

test: function testcase() {
   var NaN=1.0;
NaN='asdf';
NaN=true;
NaN=Number.NaN;

 }
});

