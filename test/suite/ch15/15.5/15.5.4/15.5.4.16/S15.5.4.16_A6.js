// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase has not prototype property
description: Checking String.prototype.toLowerCase.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toLowerCase.prototype !== undefined) {
  $ERROR('#1: String.prototype.toLowerCase.prototype === undefined. Actual: '+String.prototype.toLowerCase.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////
