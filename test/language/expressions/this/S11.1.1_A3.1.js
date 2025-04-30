// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Being in function code, "this" and eval("this"), called as a functions,
    return the global object
es5id: 11.1.1_A3.1
description: Creating function which returns "this" or eval("this")
flags: [noStrict]
---*/

//CHECK#1
function ReturnThis() {return this}
assert.sameValue(ReturnThis(), this, '#1: function ReturnThis() {return this} ReturnThis() === this');

//CHECK#2
function ReturnEvalThis() {return eval("this")}
assert.sameValue(ReturnEvalThis(), this, '#2: function ReturnEvalThis() {return eval("this")} ReturnEvalThis() === this');
