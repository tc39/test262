// Copyright 2023 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-Intl.DisplayNames.prototype.of
description: Throws a RangeError for invalid `currency` codes
info: |
  12.3.3 Intl.DisplayNames.prototype.of ( code )

  ...
  6. Assert: type is "currency".
  7. If ! IsWellFormedCurrencyCode(code) is false, throw a RangeError exception.
  8. Return the ASCII-uppercase of code.

  6.3.1 IsWellFormedCurrencyCode ( code )
    1. If the length of currency is not 3, return false.
    2. Let normalized be the ASCII-uppercase of currency.
    3. If normalized contains any code unit outside of 0x0041 through 0x005A (corresponding to Unicode characters LATIN CAPITAL LETTER A through LATIN CAPITAL LETTER Z), return false.
    4. Return true.  features: [Intl.DisplayNames] ---*/

var displayNames = new Intl.DisplayNames(undefined, {type: 'currency'});

assert.throws(RangeError, function() {
  displayNames.of('aa');
}, 'insufficient length');

assert.throws(RangeError, function() {
  displayNames.of('aaaa');
}, 'excessive length');

assert.throws(RangeError, function() {
  displayNames.of('aa1');
}, 'contains number');

assert.throws(RangeError, function() {
  displayNames.of('aa@');
}, 'contains non-alphanumeric');

assert.throws(RangeError, function() {
  displayNames.of('');
}, 'empty string');

assert.throws(RangeError, function() {
  displayNames.of('aaa-');
}, 'trailing separator (dash)');

assert.throws(RangeError, function() {
  displayNames.of('-aaa');
}, 'leading separator (dash)');

assert.throws(RangeError, function() {
  displayNames.of('_aaa');
}, 'leading separator (underscore)');

assert.throws(RangeError, function() {
  displayNames.of('aaa-');
}, 'trailing separator (dash)');

assert.throws(RangeError, function() {
  displayNames.of('aaa_');
}, 'trailing separator (underscore)');


assert.throws(RangeError, function() {
  displayNames.of(' aaa');
}, 'leading space');

assert.throws(RangeError, function() {
  displayNames.of('aaa ');
}, 'trailing space');

assert.throws(RangeError, function() {
  displayNames.of('ab c');
}, 'interstitial space');
