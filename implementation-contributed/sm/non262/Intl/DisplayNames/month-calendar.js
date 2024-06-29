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

let dn1 = new Intl.DisplayNames("en", {type: "month", calendar: "gregory"});
assert.sameValue(dn1.of(1), "January");
assert.sameValue(dn1.resolvedOptions().calendar, "gregory");

let dn2 = new Intl.DisplayNames("en", {type: "month", calendar: "hebrew"});
assert.sameValue(dn2.of(1), "Tishri");
assert.sameValue(dn2.resolvedOptions().calendar, "hebrew");

let dn3 = new Intl.DisplayNames("en", {type: "month", calendar: "islamicc"});
assert.sameValue(dn3.of(1), "Muharram");
assert.sameValue(dn3.resolvedOptions().calendar, "islamic-civil");

