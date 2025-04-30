// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T7
description: Call toLowerCase() function of NaN
---*/

Number.prototype.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(NaN.toLowerCase(), "nan", '#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; NaN.toLowerCase()=== "nan"');
//
//////////////////////////////////////////////////////////////////////////////
