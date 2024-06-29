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
var dtf = new Intl.DateTimeFormat("ja-u-ca-japanese", {
    era: "short",
    timeZone: "Asia/Tokyo",
});

var endShowa = new Date("1989-01-07T00:00:00.000Z");
var startHeisei = new Date("1989-01-08T00:00:00.000Z");

assert.sameValue(dtf.format(endShowa), "昭和64/1/7");
assert.sameValue(dtf.format(startHeisei), "平成1/1/8");

var parts = dtf.formatToParts(startHeisei);
assert.sameValue(parts.filter(p => p.type === "era")[0].value, "平成");
assert.sameValue(parts.filter(p => p.type === "year")[0].value, "1");

var dtf = new Intl.DateTimeFormat("ja-u-ca-japanese", {
    era: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
});

assert.sameValue(dtf.format(endShowa), "昭和64年1月7日");
assert.sameValue(dtf.format(startHeisei), "平成元年1月8日");

var parts = dtf.formatToParts(startHeisei);
assert.sameValue(parts.filter(p => p.type === "era")[0].value, "平成");
assert.sameValue(parts.filter(p => p.type === "year")[0].value, "元");

// ICU returns mixed numbers when an explicit numbering system is present.

var dtf = new Intl.DateTimeFormat("ja-u-ca-japanese-nu-arab", {
    era: "short",
    timeZone: "Asia/Tokyo",
});

assert.sameValue(dtf.format(endShowa), "昭和٦٤/١/٧");
assert.sameValue(dtf.format(startHeisei), "平成١/١/٨");

var dtf = new Intl.DateTimeFormat("ja-u-ca-japanese-nu-arab", {
    era: "short",
    year: "numeric",
    month: "numeric",
    timeZone: "Asia/Tokyo",
});

assert.sameValue(dtf.format(endShowa), "昭和64年١月");
assert.sameValue(dtf.format(startHeisei), "平成元年١月");

