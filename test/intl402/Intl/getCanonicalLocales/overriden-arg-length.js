// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Test Intl.getCanonicalLocales for step 5. 
info: |
  9.2.1 CanonicalizeLocaleList (locales)
    5. Let len be ? ToLength(? Get(O, "length")).
includes: [compareArray.js]
features: [Symbol]
---*/

var locales = {
  '0': 'en-US',
};

Object.defineProperty(locales, "length", {
  get: function() { throw new Test262Error() }
});

assert.throws(Test262Error, function() {
  Intl.getCanonicalLocales(locales);
}, 'Intl.getCanonicalLocales(locales) throws a Test262Error exception');

var locales = {
  '0': 'en-US',
  '1': 'pt-BR',
};

Object.defineProperty(locales, "length", {
  get: function() { return "1" }
});

assert.compareArray(Intl.getCanonicalLocales(locales), ['en-US'],
  'Intl.getCanonicalLocales({"0": "en-US", "1": "pt-BR",}) must return ["en-US"]');

var locales = {
  '0': 'en-US',
  '1': 'pt-BR',
};

Object.defineProperty(locales, "length", {
  get: function() { return 1.3 }
});

assert.compareArray(Intl.getCanonicalLocales(locales), ['en-US'],
  'Intl.getCanonicalLocales({"0": "en-US", "1": "pt-BR",}) must return ["en-US"]');

var locales = {
  '0': 'en-US',
  '1': 'pt-BR',
};

Object.defineProperty(locales, "length", {
  get: function() { return Symbol("1.8") }
});

assert.throws(TypeError, function() {
  Intl.getCanonicalLocales(locales);
}, 'Intl.getCanonicalLocales(locales) throws a TypeError exception');

var locales = {
  '0': 'en-US',
  '1': 'pt-BR',
};

Object.defineProperty(locales, "length", {
  get: function() { return -Infinity }
});

assert.compareArray(Intl.getCanonicalLocales(locales), [],
  'Intl.getCanonicalLocales({"0": "en-US", "1": "pt-BR",}) must return []');

var locales = {
  length: -Math.pow(2, 32) + 1
};

Object.defineProperty(locales, "0", {
  get: function() { throw new Error("must not be gotten!"); }
})

assert.compareArray(Intl.getCanonicalLocales(locales), [],
  'Intl.getCanonicalLocales({length: -Math.pow(2, 32) + 1}) must return []');

var count = 0;
var locs = { get length() { if (count++ > 0) throw 42; return 0; } };
var locales = Intl.getCanonicalLocales(locs); // shouldn't throw 42
assert.sameValue(locales.length, 0, 'The value of locales.length is expected to be 0');
