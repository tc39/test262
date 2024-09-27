// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
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
 * Contributor: Jason Orendorff
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 480579;
var summary = 'Do not assert: pobj_ == obj2';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  expect = '12';

  a = {x: 1};
  b = {__proto__: a};
  c = {__proto__: b};
  for (i = 0; i < 2; i++) {
    print(actual += c.x);
    b.x = 2;
  }

  assert.sameValue(expect, actual, summary);
}
