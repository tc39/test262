// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: Intl.PluralRules.prototype.selectRange default behaviour returning "few" or "other"
features: [Intl.PluralRules-selectRange]
---*/


const pr = new Intl.PluralRules("en-US");

assert.sameValue(pr.selectRange(102, 201), "few");
assert.sameValue(pr.selectRange(200, 200), "other");

