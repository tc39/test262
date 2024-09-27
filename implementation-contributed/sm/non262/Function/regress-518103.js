// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
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

var BUGNUMBER = 518103;
var summary = 'lambda constructor "method" vs. instanceof';
var actual;
var expect;

printBugNumber(BUGNUMBER);
printStatus(summary);

var Y = {widget: {}};

Y.widget.DataSource = function () {};
Y.widget.DS_JSArray = function (A) { this.data = A; };
Y.widget.DS_JSArray.prototype = new Y.widget.DataSource();

var J = new Y.widget.DS_JSArray( [ ] );

actual = J instanceof Y.widget.DataSource;
expect = true;

assert.sameValue(expect, actual, summary);

printStatus("All tests passed!");
