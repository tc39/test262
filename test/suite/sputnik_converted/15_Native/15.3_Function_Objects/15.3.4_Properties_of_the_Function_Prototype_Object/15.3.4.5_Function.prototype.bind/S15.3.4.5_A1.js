// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.5_A1;
* @section: 15.3.4.5;
* @assertion: "caller" of bound function is poisoned (step 20);
* @description A bound function should fail to find its "caller";
* @negative TypeError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.5_A1",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.5_Function.prototype.bind\S15.3.4.5_A1.js",

assertion: "\"caller\" of bound function is poisoned (step 20)",

description: "",

test: function testcase() {
   function foo() { return bar.caller; }
var bar = foo.bind({});
function baz() { return bar(); }
baz();

 }
});

