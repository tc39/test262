// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.match has not prototype property
es5id: 15.5.4.10_A6
description: Checking String.prototype.match.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(String.prototype.match.prototype, undefined, '#1: String.prototype.match.prototype === undefined');
//
//////////////////////////////////////////////////////////////////////////////
