// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice has not prototype property
es5id: 15.5.4.13_A6
description: Checking String.prototype.slice.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(String.prototype.slice.prototype, undefined, '#1: String.prototype.slice.prototype === undefined');
//
//////////////////////////////////////////////////////////////////////////////
