// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.charAt has not prototype property
description: Checking String.prototype.charAt.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.charAt.prototype !== undefined) {
  $ERROR('#1: String.prototype.charAt.prototype === undefined. Actual: '+String.prototype.charAt.prototype ); 
}
//
//////////////////////////////////////////////////////////////////////////////
