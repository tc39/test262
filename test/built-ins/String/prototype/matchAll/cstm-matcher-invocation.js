// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Invocation of @@matchAll property of user-supplied RegExp objects
info: |
    [...]
    4. Let matcher be ? GetMethod(R, @@matchAll).
    5. If matcher is not undefined, then
      a. Return ? Call(matcher, R, « O »).
features: [Symbol.match, Symbol.matchAll]
---*/

var obj = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;

obj[Symbol.match] = true; // https://tc39.github.io/ecma262/#sec-isregexp steps 1-3
obj[Symbol.matchAll] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
  return returnVal;
};

var str = '';

assert.sameValue(str.matchAll(obj), returnVal);
assert.sameValue(callCount, 1, 'Invokes the method exactly once');
assert.sameValue(thisVal, obj);
assert.notSameValue(args, undefined);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], str);
