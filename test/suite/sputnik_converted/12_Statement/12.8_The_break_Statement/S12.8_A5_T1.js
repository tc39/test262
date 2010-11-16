// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.8_A5_T1;
* @section: 12.8;
* @assertion: Identifier must be label in the label set of an enclosing (but not crossing function boundaries) IterationStatement;
* @description: Checking if breaking another labeled loop fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.8_A5_T1",

path: "12.8",

description: "Checking if breaking another labeled loop fails",

test: function testcase() {
  try {
     (function() {
         eval("(function(){\r\n    LABEL_OUT : var x=0, y=0;\r\n    LABEL_DO_LOOP : do {\r\n        LABEL_IN : x++;\r\n        if(x===10)\r\n            return;\r\n        break LABEL_ANOTHER_LOOP;\r\n        LABEL_IN_2 : y++;\r\n        function IN_DO_FUNC(){}\r\n    } while(0);\r\n    \r\n    LABEL_ANOTHER_LOOP : do {\r\n        ;\r\n    } while(0);\r\n    \r\n    function OUT_FUNC(){}\r\n})();\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

