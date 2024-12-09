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
//-----------------------------------------------------------------------------
var BUGNUMBER = 614070;
var summary = 'Array.prototype.unshift without args';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// ES6 ToLength clamps length values to 2^53 - 1.
var MAX_LENGTH = 2**53 - 1;

var a = {};
a.length = MAX_LENGTH + 1;
assert.sameValue([].unshift.call(a), MAX_LENGTH);
assert.sameValue(a.length, MAX_LENGTH);

function testGetSet(len, expected) {
    var newlen;
    var a = { get length() { return len; }, set length(v) { newlen = v; } };
    var res = [].unshift.call(a);
    assert.sameValue(res, expected);
    assert.sameValue(newlen, expected);
}

testGetSet(0, 0);
testGetSet(10, 10);
testGetSet("1", 1);
testGetSet(null, 0);
testGetSet(MAX_LENGTH + 2, MAX_LENGTH);
testGetSet(-5, 0);

/******************************************************************************/

print("All tests passed!");
