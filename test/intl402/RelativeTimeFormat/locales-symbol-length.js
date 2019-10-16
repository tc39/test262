// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat
description: >
  CanonicalizeLocaleList tries to fetch length from Object.
info: |
  CanonicalizeLocaleList ( locales )

  1. If locales is undefined, then
    a. Return a new empty List.
  2. Let seen be a new empty List.
  3. If Type(locales) is String, then
    a. Let O be CreateArrayFromList(« locales »).
  4. Else,
    a. Let O be ? ToObject(locales).
  5. Let len be ? ToLength(? Get(O, "length")).
features: [Intl.RelativeTimeFormat, Symbol]
locale: [en]
includes: [compareArray.js]
---*/

var calls = [];
var symbol = Symbol();

Symbol.prototype.length = 1;

Object.defineProperty(Symbol.prototype, 'length', {
  get() {
    assert.notSameValue(this, symbol, 'this is an object from given symbol');
    assert.sameValue(this.valueOf(), symbol, 'internal value is the symbol');
    assert(this instanceof Symbol);
    calls.push('length');
    return 1;
  }
});

Object.defineProperty(Symbol.prototype, '0', {
  get() {
    assert.notSameValue(this, symbol, 'this is an object from given symbol');
    assert.sameValue(this.valueOf(), symbol, 'internal value is the symbol');
    assert(this instanceof Symbol);
    calls.push('0');
    return 'en';
  }
});

new Intl.RelativeTimeFormat(symbol);

assert.compareArray(calls, ['length', '0']);
