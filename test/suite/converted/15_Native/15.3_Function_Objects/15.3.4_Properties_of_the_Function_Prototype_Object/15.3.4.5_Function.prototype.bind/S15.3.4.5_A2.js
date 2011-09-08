// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "arguments" of bound function is poisoned (step 21)
 *
 * @section: 15.3.4.5;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.5_Function.prototype.bind/S15.3.4.5_A2.js;
 * @description: a bound function should fail to find the bound function "arguments";
 * @negative: TypeError;
 */

function foo() { return bar.arguments; }
var bar = foo.bind({});
function baz() { return bar(); }
baz();

