// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If [[Get]] ToString(j) is undefined, return 1.
    If [[]Get] ToString(k) is undefined, return -1
esid: sec-array.prototype.sort
description: If comparefn is not undefined
---*/

var myComparefn = function(x, y) {
  if (x === undefined) return -1;
  if (y === undefined) return 1;
  return 0;
}

var x = new Array(undefined, 1);
x.sort(myComparefn);

assert.sameValue(x.length, 2, '#1: var x = new Array(undefined, 1); x.sort(myComparefn); x.length === 2');

assert.sameValue(x[0], 1, '#2: var x = new Array(undefined, 1); x.sort(myComparefn); x[0] === 1');

assert.sameValue(x[1], undefined, '#3: var x = new Array(undefined, 1); x.sort(myComparefn); x[1] === undefined');

var x = new Array(1, undefined);
x.sort(myComparefn);

assert.sameValue(x.length, 2, '#4: var x = new Array(1, undefined); x.sort(myComparefn); x.length === 2');

assert.sameValue(x[0], 1, '#5: var x = new Array(1, undefined); x.sort(myComparefn); x[0] === 1');

assert.sameValue(x[1], undefined, '#6: var x = new Array(1, undefined); x.sort(myComparefn); x[1] === undefined');
