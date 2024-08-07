// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
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
var log;
var proxy = new Proxy({
    year: "numeric",
    hour: "numeric",
}, new Proxy({
    get(t, pk, r) {
        log.push(pk);
        return Reflect.get(t, pk, r);
    }
}, {
    get(t, pk, r) {
        assert.sameValue(pk, "get");
        return Reflect.get(t, pk, r);
    }
}));

var constructorAccesses = [
    // InitializeDateTimeFormat
    "localeMatcher", "calendar", "numberingSystem", "hour12", "hourCycle", "timeZone",

    // Table 5: Components of date and time formats
    "weekday", "era", "year", "month", "day", "dayPeriod", "hour", "minute", "second",
    "fractionalSecondDigits", "timeZoneName",

    // InitializeDateTimeFormat
    "formatMatcher",
    "dateStyle", "timeStyle",
];

log = [];
new Intl.DateTimeFormat(undefined, proxy);

assert.compareArray(log, constructorAccesses);

log = [];
new Date().toLocaleString(undefined, proxy);

assert.compareArray(log, constructorAccesses);

log = [];
new Date().toLocaleDateString(undefined, proxy);

assert.compareArray(log, constructorAccesses);

log = [];
new Date().toLocaleTimeString(undefined, proxy);

assert.compareArray(log, constructorAccesses);

