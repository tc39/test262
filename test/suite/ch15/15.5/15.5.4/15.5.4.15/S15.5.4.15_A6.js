// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.substring has not prototype property
description: Checking String.prototype.substring.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.substring.prototype !== undefined) {
  $ERROR('#1: String.prototype.substring.prototype === undefined. Actual: '+String.prototype.substring.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////
