// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  ToString(searchValue)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  ...
  4. Let searchString be ? ToString(searchValue).
  5. Let functionalReplace be IsCallable(replaceValue).
  6. If functionalReplace is false, then
    a. Let replaceValue be ? ToString(replaceValue). 
  ...
  14. For each position in matchPositions, do
    a. If functionalReplace is true, then
      ...
    b. Else,
      ...
      ii. Let captures be a new empty List.
      iii. Let replacement be GetSubstitution(searchString, string, position, captures, undefined, replaceValue).
features: [String.prototype.replaceAll, Symbol.toPrimitive]
---*/

var result;

var called;
var searchValue;

called = 0;
searchValue = {
  [Symbol.toPrimitive](){
    called += 1;
    return 'a';
  },
  toString() {
    throw 'poison';
  },
  valueOf() {
    throw 'poison';
  },
};

result = 'aa'.replaceAll(searchValue, 'z');
assert.sameValue(result, 'zz', 'object @@toPrimitive');
assert.sameValue(called, 1, '@@toPrimitive is called only once');

called = 0;
searchValue = {
  [Symbol.toPrimitive]: undefined,
  toString() {
    called += 1;
    return 'a';
  },
  valueOf() {
    throw 'poison';
  },
};

result = 'aa'.replaceAll(searchValue, 'z');
assert.sameValue(result, 'zz', 'object toString');
assert.sameValue(called, 1, 'toString is called only once');

called = 0;
searchValue = {
  [Symbol.toPrimitive]: undefined,
  toString: undefined,
  valueOf() {
    called += 1;
    return 'a';
  },
};

result = 'aa'.replaceAll(searchValue, 'z');
assert.sameValue(result, 'zz', 'object valueOf');
assert.sameValue(called, 1, 'valueOf is called only once');

searchValue = 42;
result = '42. The answer is 42'.replaceAll(searchValue, 'z');
assert.sameValue(result, 'z. The answer is z', 'number');

searchValue = true;
result = 'A true ending remains trueish'.replaceAll(searchValue, 'troll');
assert.sameValue(result, 'A troll ending remains trollish', 'Boolean true');

searchValue = false;
result = 'avoid false positives, some are falsy'.replaceAll(searchValue, 'non');
assert.sameValue(result, 'avoid non positives, some are falsy', 'Boolean false');

searchValue = undefined;
result = 'undefined is not a function'.replaceAll(searchValue, 'A function');
assert.sameValue(result, 'A function is not a function', 'undefined');

searchValue = null;
result = 'typeof null is "object", Type(null) is Null.'.replaceAll(searchValue, 'LOL');
assert.sameValue(result, 'typeof LOL is "object", Type(LOL) is Null.', 'null');
