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
 * Contributor: Robert Sayre
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 410852;
var summary = 'Valgrind errors in jsemit.cpp';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  print('Note: You must run this test under valgrind to determine if it passes');

  try
  {
    eval('function(){if(t)');
  }
  catch(ex)
  {
    assert.sameValue(ex instanceof SyntaxError, true, "wrong error: " + ex);
  }

}
