// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
---*/

var invalidValues = [NaN, Infinity, -Infinity];

var pr = new Intl.PluralRules();

invalidValues.forEach(function (value) {
    assert.sameValue(pr.select(value), "other");
});
