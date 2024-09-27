// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
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
 * Contributor: Robert Sayre
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 459405;
var summary = 'Math is not ReadOnly';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  expect = 'foo';

  try
  {
    var Math = 'foo';
    actual = Math;
  }
  catch(ex)
  {
    actual = ex + '';
  }

  assert.sameValue(expect, actual, summary);
}
