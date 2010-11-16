// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A2.3_T1;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object properties have attributes { DontEnum };
 * @description: Global execution context - Value Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A2.3_T1",

path: "10.1.5, 15.1",

description: "Global execution context - Value Properties",

test: function testcase() {
   var evalStr = 
'//CHECK#1\n'+
'for (var x in this) {\n'+
'  if ( x === \'NaN\' ) {\n'+
'    $ERROR("#1: \'NaN\' have attribute DontEnum");\n'+
'  } else if ( x === \'Infinity\' ) {\n'+
'    $ERROR("#1: \'Infinity\' have attribute DontEnum");\n'+
'  } else if ( x === \'undefined\' ) {\n'+
'    $ERROR("#1: \'undefined\' have attribute DontEnum");\n'+
'  }\n'+
'}\n';

eval(evalStr);

 }
});

