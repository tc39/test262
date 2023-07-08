// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Arguments : ()"
es5id: 11.2.4_A1.1_T2
description: Function is declared with FormalParameterList
---*/

function f_arg(x,y) {
  return arguments;
}

//CHECK#1
assert.sameValue(f_arg().length, 0, '#1: function f_arg(x,y) {return arguments;} f_arg().length === 0');

//CHECK#2
assert.sameValue(f_arg()[0], undefined, '#2: function f_arg(x,y) {return arguments;} f_arg()[0] === undefined');

//CHECK#3
assert.sameValue(f_arg.length, 2, '#3: function f_arg(x,y) {return arguments;} f_arg.length === 2');
