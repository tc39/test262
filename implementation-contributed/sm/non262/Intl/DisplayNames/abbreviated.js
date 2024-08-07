// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DisplayNames-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
- addIntlExtras
description: |
  pending
esid: pending
---*/
addMozIntlDisplayNames(this);

const tests = {
  "en": {
    long: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    abbreviated: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    short: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    narrow: ["M", "T", "W", "T", "F", "S", "S"],
  },
};

for (let [locale, localeTests] of Object.entries(tests)) {
  for (let [style, weekdays] of Object.entries(localeTests)) {
    let dn = new Intl.DisplayNames(locale, {type: "weekday", style});

    let resolved = dn.resolvedOptions();
    assert.sameValue(resolved.style, style);

    for (let [day, expected] of weekdays.entries()) {
      assert.sameValue(dn.of(day + 1), expected);
    }
  }
}

