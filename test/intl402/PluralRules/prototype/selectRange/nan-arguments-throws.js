// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: Throws a RangeError if some of arguments is cast to NaN
features: [Intl.PluralRules-selectRange]
---*/

const pr = new Intl.PluralRules("en-US");

assert.throws(RangeError, function() {
  pr.selectRange(NaN, 100);
}, "NaN/Number");

assert.throws(RangeError, function() {
  pr.selectRange(100, NaN);
}, "Number/NaN");

assert.throws(RangeError, function() {
  pr.selectRange(NaN, NaN);
},  "NaN/NaN");
