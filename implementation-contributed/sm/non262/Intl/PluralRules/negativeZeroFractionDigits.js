// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-PluralRules-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
const optionsList = [
    {minimumFractionDigits: -0, maximumFractionDigits: -0},
    {minimumFractionDigits: -0, maximumFractionDigits: +0},
    {minimumFractionDigits: +0, maximumFractionDigits: -0},
    {minimumFractionDigits: +0, maximumFractionDigits: +0},
];

for (let options of optionsList) {
    let pluralRules = new Intl.PluralRules("en-US", options);

    let {minimumFractionDigits, maximumFractionDigits} = pluralRules.resolvedOptions();
    assert.sameValue(minimumFractionDigits, +0);
    assert.sameValue(maximumFractionDigits, +0);

    assert.sameValue(pluralRules.select(123), "other");
}

