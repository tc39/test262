// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-global-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 620130;
var summary =
  "Calls to eval with same code + varying strict mode of script containing " +
  "eval == fail";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function t(code) { return eval(code); }

assert.sameValue(t("'use strict'; try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         "threw");
assert.sameValue(t("try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         17);
assert.sameValue(t("'use strict'; try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         "threw");

/******************************************************************************/

print("All tests passed!");
