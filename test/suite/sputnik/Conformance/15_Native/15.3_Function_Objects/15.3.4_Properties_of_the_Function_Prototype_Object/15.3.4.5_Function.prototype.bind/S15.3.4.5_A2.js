// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.5_A1;
* @section: 15.3.4.5;
* @assertion: "arguments" of bound function is poisoned (step 21);
* @description a bound function should fail to find the bound function "arguments";
* @negative
* @errortype: TypeError;
*/

function foo() { return bar.arguments; }
var bar = foo.bind({});
function baz() { return bar(); }
baz();
