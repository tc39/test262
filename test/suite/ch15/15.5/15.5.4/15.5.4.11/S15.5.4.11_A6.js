// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace has not prototype property
description: Checking String.prototype.replace.prototype;
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.replace.prototype !== undefined) {
  $ERROR('#1: String.prototype.replace.prototype === undefined. Actual: '+String.prototype.replace.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////
