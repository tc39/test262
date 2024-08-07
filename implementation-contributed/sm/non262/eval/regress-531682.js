// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-eval-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 531682;
var summary = 'Checking proper wrapping of scope in  eval(source, scope)';
var actual;
var expect;

//-----------------------------------------------------------------------------
var x = 0;

test();
//-----------------------------------------------------------------------------

function scope1() {
    eval('var x = 1;');
    return function() { return x; }
}

function test() {
    printBugNumber(BUGNUMBER);
    printStatus (summary);

    // The scope chain in eval should be just scope1() and the global object.
    actual = eval('x', scope1());
    expect = 0;
    assert.sameValue(expect, actual, summary);
}
