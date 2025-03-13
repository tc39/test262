// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T3
description: Checking by using eval
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
assert.sameValue(eval("\"bj\"").toUpperCase(), "BJ", '#1: eval("\\"bj\\"").toUpperCase() === "BJ"');
//
//////////////////////////////////////////////////////////////////////////////
