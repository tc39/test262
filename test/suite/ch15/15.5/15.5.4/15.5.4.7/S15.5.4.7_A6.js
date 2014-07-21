// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf has not prototype property
description: Checking String.prototype.indexOf.prototype
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.indexOf.prototype !== undefined) {
  $ERROR('#1: String.prototype.indexOf.prototype === undefined. Actual: '+String.prototype.indexOf.prototype ); 
}
//
//////////////////////////////////////////////////////////////////////////////
