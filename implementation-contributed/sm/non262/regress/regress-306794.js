// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Blake Kaplan
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 306794;
var summary = 'Do not assert: parsing foo getter';
var actual = 'No Assertion';
var expect = 'No Assertion';

printBugNumber(BUGNUMBER);
printStatus (summary);
 
try
{
  eval('getter\n');
}
catch(e)
{
}

assert.sameValue(expect, actual, summary);
