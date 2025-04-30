// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If length is zero, return the empty string
esid: sec-array.prototype.join
description: Checking this use new Array() and []
---*/

var x = new Array();
assert.sameValue(x.join(), "", '#1: x = new Array(); x.join() === ""');

x = [];
x[0] = 1;
x.length = 0;
assert.sameValue(x.join(), "", '#2: x = []; x[0] = 1; x.length = 0; x.join() === ""');
