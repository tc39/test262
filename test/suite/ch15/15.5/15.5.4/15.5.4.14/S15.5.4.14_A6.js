// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.split has not prototype property
description: Checking String.prototype.split.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.split.prototype !== undefined) {
  $ERROR('#1: String.prototype.split.prototype === undefined. Actual: '+String.prototype.split.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////
