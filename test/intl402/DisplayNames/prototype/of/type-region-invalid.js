// Copyright 2023 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-Intl.DisplayNames.prototype.of
description: Throws a RangeError for invalid `region` codes
info: |
  12.3.3 Intl.DisplayNames.prototype.of ( code )

  ...
  2. If type is "region", then
    a. If code cannot be matched by the unicode_region_subtag Unicode locale nonterminal, throw a RangeError exception.
    b. Return the ASCII-uppercase of code.
features: [Intl.DisplayNames]
---*/

var displayNames = new Intl.DisplayNames(undefined, {type: 'region'});

assert.throws(RangeError, function() {
  displayNames.of('00');
}, 'insufficient length, digit');

assert.throws(RangeError, function() {
  displayNames.of('a');
}, 'insufficient length, alpha');

assert.throws(RangeError, function() {
  displayNames.of('aaa');
}, 'excessive length, alpha');

assert.throws(RangeError, function() {
  displayNames.of('1111');
}, 'excessive length, digit');

assert.throws(RangeError, function() {
  displayNames.of('');
}, 'empty string');

assert.throws(RangeError, function() {
  displayNames.of('-111');
}, 'leading separator (dash)');

assert.throws(RangeError, function() {
  displayNames.of('_111');
}, 'leading separator (underscore)');

assert.throws(RangeError, function() {
  displayNames.of('111-');
}, 'trailing separator (dash)');

assert.throws(RangeError, function() {
  displayNames.of('111-');
}, 'trailing separator (underscore)');

assert.throws(RangeError, function() {
  displayNames.of(' aa');
}, 'leading space');

assert.throws(RangeError, function() {
  displayNames.of('aa ');
}, 'trailing space');

assert.throws(RangeError, function() {
  displayNames.of('a c');
}, 'interstitial space');
