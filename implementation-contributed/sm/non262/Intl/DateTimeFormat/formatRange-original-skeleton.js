// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
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
// Test that the interval formatting uses the original skeleton, not the skeleton
// derived from the resolved pattern.
{
  let dtf = new Intl.DateTimeFormat("zh-Hans-CN", {
    formatMatcher: "best fit",
    month: "narrow",
    day: "2-digit",
    timeZone: "UTC"
  });

  assert.sameValue(dtf.format(Date.UTC(2016, 7, 1)), "8月01日");
  assert.sameValue(dtf.formatRange(Date.UTC(2016, 7, 1), Date.UTC(2016, 7, 2)), "8月1日至2日");
}

