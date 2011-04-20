// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A10;
* @section: 13;
* @assertion: Function is a data;
* @description: Using function as a property of an object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A10",

path: "13_Function_Definition\13.0_Chapter\S13.0_A10.js",

assertion: "Function is a data",

description: "Using function as a property of an object",

test: function testcase() {
   function __ziggy__func(){return "ziggy stardust"}

var __music_box={};

__music_box.ziggy = __ziggy__func;

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (typeof __music_box.ziggy !== "function") {
	$ERROR('#1: typeof __music_box.ziggy === "function". Actual: typeof __music_box.ziggy ==='+typeof __music_box.ziggy);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__music_box.ziggy() !== "ziggy stardust") {
	$ERROR('#2: __music_box.ziggy() === "ziggy stardust". Actual: __music_box.ziggy() ==='+__music_box.ziggy());
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

