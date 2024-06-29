// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-NumberFormat-shell.js
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
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 1484943;
var summary = "Don't crash doing format/formatToParts on -NaN";

print(BUGNUMBER + ": " + summary);

//-----------------------------------------------------------------------------

assert.sameValue("formatToParts" in Intl.NumberFormat(), true);

var nf = new Intl.NumberFormat("en-US");
var parts;

var values = [NaN, -NaN];

for (var v of values)
{
  assert.sameValue(nf.format(v), "NaN");

  parts = nf.formatToParts(v);
  assert.sameValue(parts.length, 1);
  assert.sameValue(parts[0].type, "nan");
  assert.sameValue(parts[0].value, "NaN");
}

//-----------------------------------------------------------------------------

print("Tests complete");
