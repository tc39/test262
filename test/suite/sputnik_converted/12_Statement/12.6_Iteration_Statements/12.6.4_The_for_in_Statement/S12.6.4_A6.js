// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A6;
* @section: 12.6.4;
* @assertion: The production IterationStatement: "for (var VariableDeclarationNoIn in Expression) Statement";
* @description: Using Object with custom prototype as an Expression is appropriate. The prototype is "{feat:2,hint:"protohint"}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A6",

path: "12_Statement\12.6_Iteration_Statements\12.6.4_The_for_in_Statement\S12.6.4_A6.js",

assertion: "The production IterationStatement: \"for (var VariableDeclarationNoIn in Expression) Statement\"",

description: "Using Object with custom prototype as an Expression is appropriate. The prototype is \"{feat:2,hint:\"protohint\"}\"",

test: function testcase() {
   function FACTORY(){this.prop=1;this.hint="hinted"};

FACTORY.prototype = {feat:2,hint:"protohint"};

var __instance = new FACTORY;

__accum="";

for (key in __instance){
	__accum+=(key + __instance[key]);
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!((__accum.indexOf("prop1")!==-1)&&(__accum.indexOf("feat2")!==-1)&&(__accum.indexOf("hinthinted")!==-1))) {
	$ERROR('#1: (__accum.indexOf("prop1")!==-1)&&(__accum.indexOf("feat2")!==-1)&&(__accum.indexOf("hinthinted")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__accum.indexOf("hintprotohint")!==-1) {
	$ERROR('#2: __accum.indexOf("hintprotohint") === -1. Actual:  __accum.indexOf("hintprotohint") ==='+ __accum.indexOf("hintprotohint")  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

