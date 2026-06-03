// Copyright 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getNumberingSystems
description: Tests selected, stable-ish outputs for locale numbering systems
info: https://cldr.unicode.org/development/development-process/design-proposals/supported-numberingsystems
includes: [compareArray.js]
features: [Intl.Locale, Intl.Locale-info]
locale: [ar, ar-SA, en, hi]
---*/

assert.compareArray(new Intl.Locale("en").getNumberingSystems(), ["latn"], "'en' locale only has 'latn' numbering");

// Ref https://github.com/unicode-org/cldr/blob/3ffe59bfbf8066c1aa6fb208483c600cd115c8db/common/main/ar.xml#L5872-L5876
const ar = new Intl.Locale("ar").getNumberingSystems();
assert(ar.indexOf("latn") > -1, "'ar' has numbering system 'latn'");
assert(ar.indexOf("arab") > -1, "'ar' has numbering system 'arab'");

assert(ar.indexOf("latn") < ar.indexOf("arab"), "default numbering system of 'ar' is 'latn'");

// Ref https://github.com/unicode-org/cldr/blob/3ffe59bfbf8066c1aa6fb208483c600cd115c8db/common/main/ar_SA.xml#L1383
assert.compareArray(new Intl.Locale("ar-SA").getNumberingSystems(), ["arab"], "'ar-SA' overrides default 'latn' with 'arab'");

// Ref https://github.com/unicode-org/cldr/blob/3ffe59bfbf8066c1aa6fb208483c600cd115c8db/common/main/hi.xml#L5531-L5534
const hi = new Intl.Locale("hi").getNumberingSystems();
assert(hi.indexOf("latn") > -1, "'hi' has numbering system 'latn'");
assert(hi.indexOf("deva") > -1, "'hi' has numbering system 'deva'");

assert(hi.indexOf("latn") < hi.indexOf("deva"), "default numbering system of 'hi' is 'latn'");
