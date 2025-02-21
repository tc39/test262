// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Arguments : ()"
es5id: 11.2.4_A1.1_T1
description: Function is declared with no FormalParameterList
---*/

function f_arg() {
  return arguments;
}

//CHECK#1
assert.sameValue(f_arg().length, 0, '#1: function f_arg() {return arguments;} f_arg().length === 0');

//CHECK#2
assert.sameValue(f_arg()[0], undefined, '#2: function f_arg() {return arguments;} f_arg()[0] === undefined');
