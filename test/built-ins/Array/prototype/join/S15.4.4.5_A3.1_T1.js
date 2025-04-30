// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString from separator
esid: sec-array.prototype.join
description: >
    Checking separator in ["", "\\", "&", true, Infinity, null,
    undefind, NaN]
---*/

var x = new Array(0, 1, 2, 3);
assert.sameValue(x.join(""), "0123", '#0: x = new Array(0,1,2,3); x.join("") === "0123"');

x = new Array(0, 1, 2, 3);
assert.sameValue(x.join("\\"), "0\\1\\2\\3", '#1: x = new Array(0,1,2,3); x.join("\\") === "0\\1\\2\\3"');

assert.sameValue(x.join("&"), "0&1&2&3", '#2: x = new Array(0,1,2,3); x.join("&") === "0&1&2&3"');

assert.sameValue(x.join(true), "0true1true2true3", '#3: x = new Array(0,1,2,3); x.join(true) === "0true1true2true3"');

assert.sameValue(x.join(Infinity), "0Infinity1Infinity2Infinity3", '#4: x = new Array(0,1,2,3); x.join(Infinity) === "0Infinity1Infinity2Infinity3"');

assert.sameValue(x.join(null), "0null1null2null3", '#3: 5 = new Array(0,1,2,3); x.join(null) === "0null1null2null3"');

assert.sameValue(x.join(undefined), "0,1,2,3", '#6: x = new Array(0,1,2,3); x.join(undefined) === "0,1,2,3"');

assert.sameValue(x.join(NaN), "0NaN1NaN2NaN3", '#7: x = new Array(0,1,2,3); x.join(NaN) === "0NaN1NaN2NaN3"');
