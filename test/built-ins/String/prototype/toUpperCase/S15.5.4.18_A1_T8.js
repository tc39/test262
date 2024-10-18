// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T8
description: Call toUpperCase() function of Infinity;
---*/

Number.prototype.toUpperCase = String.prototype.toUpperCase;

assert.sameValue(Infinity.toUpperCase(), "INFINITY", '#1: Number.prototype.toUpperCase = String.prototype.toUpperCase; Infinity.toUpperCase()=== "INFINITY"');
