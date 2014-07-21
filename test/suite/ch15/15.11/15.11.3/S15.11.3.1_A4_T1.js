// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Error has property prototype
description: Checking Error.hasOwnProperty('prototype')
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(Error.hasOwnProperty('prototype'))) {
  $ERROR('#1: Error.hasOwnProperty(\'prototype\') return true. Actual: '+Error.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////
