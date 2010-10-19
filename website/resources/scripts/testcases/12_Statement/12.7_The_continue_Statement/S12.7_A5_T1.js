// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A5_T1;
* @section: 12.7;
* @assertion: When "continue Identifier" is evaluated Identifier must be label in the label set of an enclosing (but not crossing function boundaries) IterationStatement;
* @description: Trying to continue another labeled loop; 
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A5_T1",

path: "12.7",

description: "Trying to continue another labeled loop",

test: function testcase() {
  try {
     (function() {
         eval("LABEL_OUT : var x=0, y=0;\r\nLABEL_DO_LOOP : do {\r\n   LABEL_IN : x++;\r\n   if(x===10)break;\r\n   continue LABEL_ANOTHER_LOOP;\r\n   LABEL_IN_2 : y++;\r\n   function IN_DO_FUNC(){}\r\n} while(0);\r\n\r\nLABEL_ANOTHER_LOOP : do {\r\n    ;\r\n} while(0);\r\n\r\nfunction OUT_FUNC(){}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

