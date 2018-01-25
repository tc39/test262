// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Invocation of @@matchAll property of internally-created RegExps
info: |
    [...]
    3. Else,
      a. Let R be ? RegExpCreate(regexp, "g").
    4. Let matcher be ? GetMethod(R, @@matchAll).
    5. If matcher is not undefined, then
      a. Return ? Call(matcher, R, « O »).
    6. Return ? MatchAllIterator(R, O).
features: [Symbol.match, Symbol.matchAll]
---*/

var originalMatchAll = RegExp.prototype[Symbol.matchAll];
var returnVal = {};
var result, thisVal, args;

RegExp.prototype[Symbol.matchAll] = function() {
  thisVal = this;
  args = arguments;
  return returnVal;
};

var str = 'target';
var stringToMatch = 'string source';

try {
  result = str.matchAll(stringToMatch);

  assert(thisVal instanceof RegExp);
  assert.sameValue(!!thisVal[Symbol.match], true);
  assert.sameValue(thisVal.source, stringToMatch);
  assert.sameValue(thisVal.flags, 'g');
  assert.sameValue(thisVal.lastIndex, 0);
  assert.sameValue(args.length, 1);
  assert.sameValue(args[0], str);
  assert.sameValue(result, returnVal);
} finally {
  RegExp.prototype[Symbol.matchAll] = originalMatchAll;
}
