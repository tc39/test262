// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Calling a function as a constructor is inadmissible as long as this.any_Function is declared by eval and called
 *
 * @path 13_Function_Definition/13.2_Creating_Function_Objects/S13.2.2_A13.js
 * @description Calling a function as a constructor after it has been declared by eval
 */

function FACTORY(){
   this.id = 0;
      
   this.id = func();
   
   eval("function func(){return \"id_string\";}");
     
}
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	var obj = new FACTORY();
	$ERROR('#1: var obj = new FACTORY() lead to throwing exception');
} catch (e) {}
//
//////////////////////////////////////////////////////////////////////////////

