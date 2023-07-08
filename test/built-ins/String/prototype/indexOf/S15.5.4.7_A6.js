// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf has not prototype property
es5id: 15.5.4.7_A6
description: Checking String.prototype.indexOf.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(String.prototype.indexOf.prototype, undefined, '#1: String.prototype.indexOf.prototype === undefined');
//
//////////////////////////////////////////////////////////////////////////////
