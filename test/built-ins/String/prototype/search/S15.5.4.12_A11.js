// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the search method is 1
es5id: 15.5.4.12_A11
description: Checking String.prototype.search.length
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.search.hasOwnProperty("length"))) {
  throw new Test262Error('#1: String.prototype.search.hasOwnProperty("length") return true. Actual: ' + String.prototype.search.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(String.prototype.search.length, 1, '#2: String.prototype.search.length === 1');
//
//////////////////////////////////////////////////////////////////////////////
