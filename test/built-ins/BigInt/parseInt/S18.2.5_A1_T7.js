// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString
esid: sec-bigint-parseint-string-radix
description: If Type(value) is Object, evaluate ToPrimitive(value, String)
---*/

var object = {valueOf: function() {return 1}};
assert.throws(SyntaxError, () => BigInt.parseInt(object));

var object = {valueOf: function() {return 1}, toString: function() {return 0}};
assert.sameValue(BigInt.parseInt(object), 0n);

var object = {valueOf: function() {return 1}, toString: function() {return {}}};
assert.sameValue(BigInt.parseInt(object), 1n);

var object = {valueOf: function() {throw "error"}, toString: function() {return 1}};
assert.sameValue(BigInt.parseInt(object), 1n);

var object = {toString: function() {return 1}};
assert.sameValue(BigInt.parseInt(object), 1n);

var object = {valueOf: function() {return {}}, toString: function() {return 1}};
assert.sameValue(BigInt.parseInt(object), 1n);

var object = {valueOf: function() {return 1}, toString: function() {throw "error"}};
assert.throws("error", BigInt.parseInt(object));

var object = {valueOf: function() {return {}}, toString: function() {return {}}};
assert.throws(TypeError, () => BigInt.parseInt(object));
