// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A14;
* @section: 13.2.2;
* @assertion: Calling a function as a constructor is inadmissible as long as this.any_Function is declared by eval and called;
* @description: Calling a function as a constructor after it has been declared by eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A14",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2.2_A14.js",

assertion: "Calling a function as a constructor is inadmissible as long as this.any_Function is declared by eval and called",

description: "Calling a function as a constructor after it has been declared by eval",

test: function testcase() {
   function FACTORY(){
   this.id = 0;
   
   eval("function func(){return \"id_string\";}");
      
   this.id = func();
     
}
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	var obj = new FACTORY();
} catch (e) {
	$ERROR('#1: var obj = new FACTORY() does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

