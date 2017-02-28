// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-object-initializer-runtime-semantics-evaluation
es6id: 12.2.6.8
description: Numeric literals as accessor property names
info: |
  12.2.6.7 Runtime Semantics: Evaluation

  [...]

  LiteralPropertyName : NumericLiteral

  1. Let nbr be the result of forming the value of the NumericLiteral.
  2. Return ! ToString(nbr).
---*/

var zeroSet, nonCanonicalSet, leadingPointSet, exponentSet, binarySet;
var octalSet, hexSet;
var obj = {
  get 0() { return 'get zero'; },
  set 0(param) { zeroSet = param; },
  get 0.0000001() { return 'get non-canonical'; },
  set 0.0000001(param) { nonCanonicalSet = param; },
  get .1() { return 'get leading point'; },
  set .1(param) { leadingPointSet = param; },
  get 1E+9() { return 'get exponent'; },
  set 1E+9(param) { exponentSet = param; },
  get 0b10() { return 'get binary'; },
  set 0b10(param) { binarySet = param; },
  get 0o10() { return 'get octal'; },
  set 0o10(param) { octalSet = param; },
  get 0x10() { return 'get hex'; },
  set 0x10(param) { hexSet = param; }
};

assert.sameValue(obj['0'], 'get zero');
assert.sameValue(obj['1e-7'], 'get non-canonical');
assert.sameValue(obj['0.1'], 'get leading point');
assert.sameValue(obj['1000000000'], 'get exponent');
assert.sameValue(obj['2'], 'get binary');
assert.sameValue(obj['8'], 'get octal');
assert.sameValue(obj['16'], 'get hex');

obj['0'] = 'set zero';
assert.sameValue(zeroSet, 'set zero');

obj['1e-7'] = 'set non-canonical';
assert.sameValue(nonCanonicalSet, 'set non-canonical');

obj['0.1'] = 'set leading point';
assert.sameValue(leadingPointSet, 'set leading point');

obj['1000000000'] = 'set exponent';
assert.sameValue(exponentSet, 'set exponent');

obj['2'] = 'set binary';
assert.sameValue(binarySet, 'set binary');

obj['8'] = 'set octal';
assert.sameValue(octalSet, 'set octal');

obj['16'] = 'set hex';
assert.sameValue(hexSet, 'set hex');
