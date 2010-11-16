// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A12_T3;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "break" and (Evaluate Statement).target is in the current label set, (normal, (Evaluate Statement), empty) is returned while evaluating a loop;
* @description: Trying to break non-existent label;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A12_T3",

path: "12.6.3",

description: "Trying to break non-existent label",

test: function testcase() {
  try {
     (function() {
         eval("__str=\"\";\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#4\r\nouter:for(index=0;index<4;index+=1){\r\n    nested:for(index_n=0;index_n<=index;index_n++){\r\n        if(index*index_n >= 4)break nonexist;\r\n        __str+=\"\"+index+index_n;\r\n    }\r\n};\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

