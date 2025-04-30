// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator !x uses [[Default Value]]
es5id: 11.4.9_A2.2_T1
description: If Type(value) is Object, return false
---*/

//CHECK#1
var object = {valueOf: function() {return 1}};
assert.sameValue(!object, false, '#1: var object = {valueOf: function() {return 1}}; !object === false');

//CHECK#2
var object = {valueOf: function() {return 1}, toString: function() {return 0}};
assert.sameValue(!object, false, '#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; !object === false');

//CHECK#3
var object = {valueOf: function() {return 1}, toString: function() {return {}}};
assert.sameValue(!object, false, '#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; !object === false');

//CHECK#4
var object = {valueOf: function() {return 1}, toString: function() {throw "error"}};
assert.sameValue(!object, false, '#4: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; !object === false');

//CHECK#5
var object = {toString: function() {return 1}};
assert.sameValue(!object, false, '#5: var object = {toString: function() {return 1}}; !object === false');

//CHECK#6
var object = {valueOf: function() {return {}}, toString: function() {return 1}}
assert.sameValue(!object, false, '#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; !object === false');

//CHECK#7
var object = {valueOf: function() {throw "error"}, toString: function() {return 1}};
assert.sameValue(!object, false, '#7: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; !object === false');

//CHECK#8
var object = {valueOf: function() {return {}}, toString: function() {return {}}};
assert.sameValue(!object, false, '#8: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; !object === false');
