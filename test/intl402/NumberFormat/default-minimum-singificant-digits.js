// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Tests that the default value of minimumSignificantDigits is 1.
---*/

// maximumSignificantDigits needs to be in range from minimumSignificantDigits
// to 21 (both inclusive). Setting maximumSignificantDigits to 0 will throw a
// RangeError if the (default) minimumSignificantDigits is at least 1.
assert.throws(RangeError, function() {
  Intl.NumberFormat(undefined, {maximumSignificantDigits: 0});
});

// For similar reasons, the following statement is checking that
// minimumSignificantDigits is at most 1.
Intl.NumberFormat(undefined, {maximumSignificantDigits: 1});
