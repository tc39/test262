// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Compare the contents of two arrays
---*/

function isSameValue(a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  if (a !== a && b !== b) return true;

  return a === b;
}

function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (!isSameValue(b[i], a[i])) {
      return false;
    }
  }
  return true;
}

assert.compareArray = function(actual, expected, message) {
  function formatArray(array) {
    return '[' + array.map(String).join(', ') + ']';
  }

  assert(compareArray(actual, expected),
         'Expected ' + formatArray(actual) + ' and ' + formatArray(expected) + ' to have the same contents. ' + message);
};
