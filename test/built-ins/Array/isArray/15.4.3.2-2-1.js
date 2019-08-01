// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.isarray
description: Array.isArray applied to an object with an array as the prototype
---*/

var proto = [];
var Con = function() {};
Con.prototype = proto;

var child = new Con();

assert.sameValue(Array.isArray(child), false, 'Array.isArray(child)');
