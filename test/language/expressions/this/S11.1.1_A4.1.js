// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Being in anonymous code, "this" and eval("this"), called as a function,
    return the global object
es5id: 11.1.1_A4.1
description: Creating function with new Function() constructor
---*/

//CHECK#1
var MyFunction = new Function("return this");
assert.sameValue(MyFunction(), this, '#1: var MyFunction = new Function("return this"); MyFunction() === this');

//CHECK#2
MyFunction = new Function("return eval(\'this\')");
assert.sameValue(MyFunction(), this, '#2: var MyFunction = new Function("return eval(\'this\')"); MyFunction() === this');
