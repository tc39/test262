// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If array element is undefined or null, use the empty string
esid: sec-array.prototype.join
description: Checking this use new Array() and []
---*/

var x = [];
x[0] = undefined;
assert.sameValue(x.join(), "", '#1: x = []; x[0] = undefined; x.join() === ""');

x = [];
x[0] = null;
assert.sameValue(x.join(), "", '#2: x = []; x[0] = null; x.join() === ""');

x = Array(undefined, 1, null, 3);
assert.sameValue(x.join(), ",1,,3", '#3: x = Array(undefined,1,null,3); x.join() === ",1,,3"');
