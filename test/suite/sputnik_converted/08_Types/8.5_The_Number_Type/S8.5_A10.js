// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A10;
 * @section: 8.5, 7.8.3;
 * @assertion: Infinity is not a keyword;
 * @description: Create variable entitled Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A10",

path: "08_Types\8.5_The_Number_Type\S8.5_A10.js",

assertion: "Infinity is not a keyword",

description: "Create variable entitled Infinity",

test: function testcase() {
   var Infinity=1.0;
Infinity='asdf';
Infinity=true;

 }
});

