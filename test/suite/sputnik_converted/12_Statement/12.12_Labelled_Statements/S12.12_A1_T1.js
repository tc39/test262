// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.12_A1_T1;
 * @section: 12.12;
 * @assertion: Labelled statements are only used in conjunction with labelled 
 * break and continue statements;
 * @description: Checking if labelled break works. See continue and break sections;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.12_A1_T1",

path: "12_Statement\12.12_Labelled_Statements\S12.12_A1_T1.js",

assertion: "Labelled statements are only used in conjunction with labelled",

description: "Checking if labelled break works. See continue and break sections",

test: function testcase() {
   var object = {p1: 1, p2: 1};
var result = 0;
lbl: for(var i in object){
  result += object[i];
  break lbl;
}

if(!(result === 1)){
  $ERROR("'break label' should break execution of labelled iteration statement");
}

 }
});

