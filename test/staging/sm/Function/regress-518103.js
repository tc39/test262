/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
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
