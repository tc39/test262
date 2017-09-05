// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: If Type(value) is Object, evaluate ToPrimitive(value, Number)
---*/

var object = {valueOf: function() {return 2}};
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {valueOf: function() {return 2}, toString: function() {return 1}};
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {valueOf: function() {return 2}, toString: function() {return {}}};
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {valueOf: function() {return 2}, toString: function() {throw "error"}};
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {toString: function() {return 2}};
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {valueOf: function() {return {}}, toString: function() {return 2}}
assert.sameValue(BigInt.parseInt("11", object), BigInt.parseInt("11", 2));

var object = {valueOf: function() {throw "error"}, toString: function() {return 2}};
assert.throws("error", BigInt.parseInt("11", object));

var object = {valueOf: function() {return {}}, toString: function() {return {}}};
assert.throws(TypeError, () => BigInt.parseInt("11", object));
