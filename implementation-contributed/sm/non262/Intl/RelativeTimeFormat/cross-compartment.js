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
var otherGlobal = newGlobal();

var relativeTimeFormat = new Intl.RelativeTimeFormat();
var ccwRelativeTimeFormat = new otherGlobal.Intl.RelativeTimeFormat();

// Test Intl.RelativeTimeFormat.prototype.format with a CCW object.
var Intl_RelativeTimeFormat_format = Intl.RelativeTimeFormat.prototype.format;

assert.sameValue(Intl_RelativeTimeFormat_format.call(ccwRelativeTimeFormat, 0, "hour"),
         Intl_RelativeTimeFormat_format.call(relativeTimeFormat, 0, "hour"));

// Test Intl.RelativeTimeFormat.prototype.resolvedOptions with a CCW object.
var Intl_RelativeTimeFormat_resolvedOptions = Intl.RelativeTimeFormat.prototype.resolvedOptions;

assert.sameValue(deepEqual(Intl_RelativeTimeFormat_resolvedOptions.call(ccwRelativeTimeFormat),
                   Intl_RelativeTimeFormat_resolvedOptions.call(relativeTimeFormat)),
         true);

