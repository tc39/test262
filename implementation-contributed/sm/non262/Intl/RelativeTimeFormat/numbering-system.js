// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-RelativeTimeFormat-shell.js
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
// Ensure passing the default numbering system leads to the same result as when
// no explicit numbering system is present.
//
// This is a regression test for the ICU issue reported at
// <https://unicode-org.atlassian.net/browse/ICU-20280>.

for (var requestedLocale of [undefined, "en", "de", "fr"]) {
  var rtf = new Intl.RelativeTimeFormat(requestedLocale);
  var {locale, numberingSystem} = rtf.resolvedOptions();
  var rtfNu = new Intl.RelativeTimeFormat(`${locale}-u-nu-${numberingSystem}`);

  for (var unit of ["year", "quarter", "month", "week", "day", "hour", "minute", "second"]) {
    for (var value of [-10, -3, -2, -1, 0, 1, 2, 3, 10]) {
      assert.sameValue(rtfNu.format(value, unit), rtf.format(value, unit));
    }
  }
}

