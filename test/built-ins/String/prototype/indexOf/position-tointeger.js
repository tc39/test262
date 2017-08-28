// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.indexof
description: String.prototype.indexOf type coercion for position parameter
info: >
  String.prototype.indexOf ( searchString [ , position ] )

  4. Let pos be ? ToInteger(position).

includes: [typeCoercion.js]
---*/

getValuesCoercibleToIntegerZero().forEach(function(zero) {
  assert.sameValue("aaaa".indexOf("aa", zero), 0, "with value " + zero);
});

getValuesCoercibleToIntegerOne().forEach(function(one) {
  assert.sameValue("aaaa".indexOf("aa", one), 1, "with value " + one);
});

getValuesCoercibleToIntegerFromInteger(2).forEach(function(two) {
  assert.sameValue("aaaa".indexOf("aa", two), 2, "with value " + two);
});

getValuesNotCoercibleToInteger().forEach(function(pair) {
  var error = pair.error;
  var value = pair.value;
  assert.throws(error, function() { "".indexOf("", value); });
});
