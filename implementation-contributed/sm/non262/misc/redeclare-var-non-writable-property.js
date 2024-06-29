// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-misc-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 539488;
var summary =
  '|var| statements for existing, read-only/permanent properties should not ' +
  'be errors';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var undefined;

/******************************************************************************/

print("All tests passed!");
