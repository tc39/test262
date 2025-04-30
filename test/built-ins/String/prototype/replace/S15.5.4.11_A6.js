// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace has not prototype property
es5id: 15.5.4.11_A6
description: Checking String.prototype.replace.prototype;
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(String.prototype.replace.prototype, undefined, '#1: String.prototype.replace.prototype === undefined');
//
//////////////////////////////////////////////////////////////////////////////
