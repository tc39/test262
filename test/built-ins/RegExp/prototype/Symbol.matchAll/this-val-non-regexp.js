// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The `this` value must be a regular expression (has Symbol.match)
info: |
    1. Let R be the this value.
    2. Return ? MatchAllIterator(R, string).
    [...]
    1. If ? IsRegExp(R) is not true, throw a TypeError exception.
features: [Symbol.match, Symbol.matchAll]
---*/

var regexObj = {};
regexObj[Symbol.match] = true;
var obj = {};

RegExp.prototype[Symbol.matchAll].call(regexObj);

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.matchAll].call(obj);
});
