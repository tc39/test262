// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: Throws a RangeError if arguments aren't x < y or are equal
---*/

const pr = new Intl.PluralRules("en-US");
pr.selectRange(200,200);
assert.throws(RangeError, function() {
  pr.selectRange(200, 100);
});
