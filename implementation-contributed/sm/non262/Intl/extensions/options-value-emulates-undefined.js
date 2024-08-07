// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- IsHTMLDDA
- noStrict
includes:
- non262-Intl-extensions-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
features:
- Intl
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 843004;
var summary =
  "Use of an object that emulates |undefined| as the sole option must " +
  "preclude imputing default values";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var opt = createIsHTMLDDA();
opt.toString = function() { return "long"; };

var str = new Date(2013, 12 - 1, 14).toLocaleString("en-US", { weekday: opt });

// Because "weekday" was present and not undefined (stringifying to "long"),
// this must be a string like "Saturday" (in this implementation, that is).
assert.sameValue(str, "Saturday");

print("Tests complete");
