/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  String.prototype.split with undefined separator
esid: pending
---*/

function assertEqArr(a1, a2) {
    assert.sameValue(a1.length, a2.length);

    for(var i=0; i<a1.length; i++) {
        assert.sameValue(a1[i], a2[i]);
    }
}
var s = '--undefined--undefined--';

assertEqArr(s.split(undefined, undefined), [s]);
assertEqArr(s.split(undefined, -1), [s]);

assertEqArr(s.split(undefined, 1), [s]);
assertEqArr(s.split("undefined", 1), ["--"]);

assertEqArr(s.split("-", 0), []);
assertEqArr(s.split(undefined, 0), []);
assertEqArr(s.split(s, 0), []);
