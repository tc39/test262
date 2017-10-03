// Copyright (C) 2017 the Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimStart
description: >
    ToString perfers Symbol.toPrimitive to toString to valueOf
info: |
  Runtime Semantics: TrimString ( string, where )
  1. Let str be ? RequireObjectCoercible(string).
  2. Let S be ? ToString(str).
   ...

  ToString ( argument )
  If arguement is Object:
    1. Let primValue be ? ToPrimitive(argument, hint String).
   ...

  ToPrimitive ( input [, PreferredType ])
   ...
    b. Else if PreferredType is hint String, let hint be "string".
   ...
    d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive)
    e. If exoticToPrim is not undefined, then
      i. Let result be ? Call(exoticToPrim, input, « hint »).
      ii. If Type(result) is not Object, return result.
      iii. Throw a TypeError exception.
    f. If hint is "default", set hint to "number".
    g. Return ? OrdinaryToPrimitive(input, hint).
   ...

  OrdinaryToPrimitive( O, hint )
   ...
    3. If hint is "string", then
      a. Let methodNames be « "toString", "valueOf" ».
   ...
features: [string-trimming, Symbol.toPrimitive]
---*/

var trimStart = String.prototype.trimStart;

var called = 0;
var thisVal = {
  get [Symbol.toPrimitive]() {
    called += 1;
    return function() { return '' };
  },
  toString: function() {
    throw new Test262Error(
	'this.toString called before this[Symbol.toPrimitive]'
    );
  },
  valueOf: function() {
    throw new Test262Error(
	'this.valueOf called before this[Symbol.toPrimitive]'
    );
  },
};

// Test that thisVal[Symbol.toPrimitive] is called before toString or valueOf
trimStart.call(thisVal);
assert.sameValue(called, 1, '[Symbol.toPrimitive] expected to have been called');

var called = 0;
var thisVal = {
  [Symbol.toPrimitive]: undefined,
  get toString() {
    called += 1;
    return function() { return '' };
  },
  valueOf: function() {
    throw new Test262Error(
      'this.valueOf called before this[Symbol.toPrimitive]'
    );
  },
};

// Test that toString is called before valueOf
trimStart.call(thisVal);
assert.sameValue(called, 1, 'this.toString expected to have been called');

var called = 0;
var thisVal = {
  [Symbol.toPrimitive]: undefined,
  toString: undefined,
  get valueOf() {
    called += 1;
    return function() { return '' };
  },
};

// Test that valueOf is called when neither [Symbol.toPrimitive] nor toString
//  are defined.
trimStart.call(thisVal);
assert.sameValue(called, 1, 'this.valueOf expected to have been called');
