// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Locale-shell.js
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
var g = newGlobal();

var tag = "de-Latn-AT-u-ca-gregory-nu-latn-co-phonebk-kf-false-kn-hc-h23";
var locale = new Intl.Locale(tag);
var ccwLocale = new g.Intl.Locale(tag);

for (var [key, {get, value = get}] of Object.entries(Object.getOwnPropertyDescriptors(Intl.Locale.prototype))) {
    if (typeof value === "function") {
        if (key !== "constructor") {
            var expectedValue = value.call(locale);

            if (typeof expectedValue === "string" || typeof expectedValue === "boolean") {
                assert.sameValue(value.call(ccwLocale), expectedValue, key);
            } else if (expectedValue instanceof Intl.Locale) {
                assert.sameValue(value.call(ccwLocale).toString(), expectedValue.toString(), key);
            } else {
                throw new Error("unexpected result value");
            }
        } else {
            assert.sameValue(new value(ccwLocale).toString(), new value(locale).toString(), key);
        }
    }
}

