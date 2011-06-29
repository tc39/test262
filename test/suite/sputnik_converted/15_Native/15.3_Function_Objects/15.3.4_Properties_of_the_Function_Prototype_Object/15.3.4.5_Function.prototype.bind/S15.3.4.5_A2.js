// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


// Converted for Test262 from original Sputnik source

 function foo() { return bar.arguments; }
var bar = foo.bind({});
function baz() { return bar(); }
baz();
 

