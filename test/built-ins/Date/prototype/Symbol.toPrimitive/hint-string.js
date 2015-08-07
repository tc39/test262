// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 20.3.4.45
description: Behavior when `hint` argument is specified as "string"
info: >
    1. Let O be the this value.
    2. If Type(O) is not Object, throw a TypeError exception.
    3. If hint is the String value "string" or the String value "default", then
       a. Let tryFirst be "string".
    4. Else if hint is the String value "number", then
       a. Let tryFirst be "number".
    5. Else, throw a TypeError exception.
    6. Return OrdinaryToPrimitive(O, tryFirst).
features: [Symbol.toPrimitive]
---*/

var voAccessCount, voCallCount, tsCallCount;
var obj;

obj = {
  get valueOf() {
    voAccessCount += 1;
  },
  toString: function() {
    tsCallCount += 1;
    return 'toString test262';
  }
};

voAccessCount = 0;
tsCallCount = 0;
assert.sameValue(
  Date.prototype[Symbol.toPrimitive].call(obj, 'string'),
  'toString test262'
);
assert.sameValue(voAccessCount, 0, '`valueOf` method was not referenced');
assert.sameValue(tsCallCount, 1, '`toString` method was invoked exactly once');

obj = {
  valueOf: function() {
    voCallCount += 1;
    return 'valueOf test262';
  },
  toString: function() {
    tsCallCount += 1;
    return {};
  }
};

voCallCount = 0;
tsCallCount = 0;
assert.sameValue(
  Date.prototype[Symbol.toPrimitive].call(obj, 'string'),
  'valueOf test262',
  '`valueOf` is used as a fallback when `toString` returns an object'
);
assert.sameValue(voCallCount, 1, '`valueOf` method was invoked exactly once');
assert.sameValue(tsCallCount, 1, '`toString` method was invoked exactly once');

obj = {
  valueOf: function() {
    voCallCount += 1;
    return 'valueOf test262';
  },
  toString: null
};

voCallCount = 0;
assert.sameValue(
  Date.prototype[Symbol.toPrimitive].call(obj, 'string'),
  'valueOf test262',
  '`valueOf` is used as a fallback when `toString` is not callable'
);
assert.sameValue(voCallCount, 1, '`valueOf` method was invoked exactly once');

obj = {
  valueOf: null,
  toString: null
};

assert.throws(TypeError, function() {
  Date.prototype[Symbol.toPrimitive].call(obj, 'string');
});
