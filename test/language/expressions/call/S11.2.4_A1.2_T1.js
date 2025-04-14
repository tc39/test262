// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Arguments : (ArgumentList)"
es5id: 11.2.4_A1.2_T1
description: Function is declared with no FormalParameterList
---*/

var f_arg = function() {
  return arguments;
}

//CHECK#1
assert.sameValue(f_arg(1,2,3).length, 3, '#1: f_arg = function()() {return arguments;} f_arg(1,2,3).length === 3');

//CHECK#2
assert.sameValue(f_arg(1,2,3)[0], 1, '#1: f_arg = function()() {return arguments;} f_arg(1,2,3)[0] === 1');

//CHECK#3
assert.sameValue(f_arg(1,2,3)[1], 2, '#3: f_arg = function()() {return arguments;} f_arg(1,2,3)[1] === 2');

//CHECK#4
assert.sameValue(f_arg(1,2,3)[2], 3, '#4: f_arg = function()() {return arguments;} f_arg(1,2,3)[2] === 3');

//CHECK#5
assert.sameValue(f_arg(1,2,3)[3], undefined, '#5: f_arg = function()() {return arguments;} f_arg(1,2,3)[3] === undefined');
