// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T6
description: Call toLocaleLowerCase() function of Number.NEGATIVE_INFINITY
---*/

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue((Number.NEGATIVE_INFINITY).toLocaleLowerCase(), "-infinity", '#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; (Number.NEGATIVE_INFINITY).toLocaleLowerCase() === "-infinity"');
//
//////////////////////////////////////////////////////////////////////////////
