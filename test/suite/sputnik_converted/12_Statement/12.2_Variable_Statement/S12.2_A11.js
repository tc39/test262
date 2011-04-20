// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A11;
* @section: 12.2;
* @assertion: When using property attributes, {ReadOnly} is not used;
* @description: Changing variable value using property attributes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A11",

path: "12_Statement\12.2_Variable_Statement\S12.2_A11.js",

assertion: "When using property attributes, {ReadOnly} is not used",

description: "Changing variable value using property attributes",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
this['__declared__var'] = "baloon";
if (this['__declared__var'] !== "baloon") {
	$ERROR('#1: this[\'__declared__var\'] === "baloon". Actual:  this[\'__declared__var\'] ==='+ this['__declared__var']  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__declared__var !== "baloon") {
	$ERROR('#2: __declared__var === "baloon". Actual:  __declared__var ==='+ __declared__var  );
}
//
//////////////////////////////////////////////////////////////////////////////

var __declared__var;

 }
});

