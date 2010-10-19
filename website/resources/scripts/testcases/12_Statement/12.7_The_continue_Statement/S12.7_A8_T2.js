// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A8_T2;
* @section: 12.7;
* @assertion: Appearing of "continue" within a "try/catch" Block yields SyntaxError;
* @description: Checking if execution of "continue" within catch Block fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A8_T2",

path: "12.7",

description: "Checking if execution of \"continue\" within catch Block fails",

test: function testcase() {
  try {
     (function() {
         eval("var x=0,y=0;\r\n\r\ntry{\r\n	LABEL1 : do {\r\n		x++;\r\n		throw \"gonna leave it\";\r\n		y++;\r\n	} while(0);\r\n	$ERROR(\'#1: throw \"gonna leave it\" lead to throwing exception\');\r\n} catch(e){\r\n	continue;\r\n	LABEL2 : do {\r\n		x++;\r\n		y++;\r\n	} while(0);\r\n};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

