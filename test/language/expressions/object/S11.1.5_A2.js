// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Evaluate the production ObjectLiteral: { PropertyName :
    AssignmentExpression }
es5id: 11.1.5_A2
description: Creating property "prop" of various types(boolean, number and etc.)
---*/

//CHECK#1
var x = true;
var object = {prop : x};
assert.sameValue(object.prop, x, '#1: var x = true; var object = {prop : x}; object.prop === x');

//CHECK#2
var x = new Boolean(true);
var object = {prop : x};
assert.sameValue(object.prop, x, '#2: var x = new Boolean(true); var object = {prop : x}; object.prop === x');

//CHECK#3
var x = 1;
var object = {prop : x};
assert.sameValue(object.prop, x, '#3: var x = 1; var object = {prop : x}; object.prop === x');

//CHECK#4
var x = new Number(1);
var object = {prop : x};
assert.sameValue(object.prop, x, '#4: var x = new Number(1); var object = {prop : x}; object.prop === x');

//CHECK#5
var x = "1";
var object = {prop : x};
assert.sameValue(object.prop, x, '#5: var x = "1"; var object = {prop : x}; object.prop === x');

//CHECK#6
var x = new String(1);
var object = {prop : x};
assert.sameValue(object.prop, x, '#6: var x = new String(1); var object = {prop : x}; object.prop === x');

//CHECK#7
var x = undefined;
var object = {prop : x};
assert.sameValue(object.prop, x, '#7: var x = undefined; var object = {prop : x}; object.prop === x');

//CHECK#8
var x = null;
var object = {prop : x};
assert.sameValue(object.prop, x, '#8: var x = null; var object = {prop : x}; object.prop === x');

//CHECK#9
var x = {};
var object = {prop : x};
assert.sameValue(object.prop, x, '#9: var x = {}; var object = {prop : x}; object.prop === x');

//CHECK#10
var x = [1,2];
var object = {prop : x};
assert.sameValue(object.prop, x, '#10: var x = [1,2]; var object = {prop : x}; object.prop === x');

//CHECK#11
var x = function() {};
var object = {prop : x};
assert.sameValue(object.prop, x, '#11: var x = function() {}; var object = {prop : x}; object.prop === x');

//CHECK#12
var x = this;
var object = {prop : x};
assert.sameValue(object.prop, x, '#12: var x = this; var object = {prop : x}; object.prop === x');
