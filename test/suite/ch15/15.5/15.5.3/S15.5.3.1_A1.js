// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String has property prototype
description: Checking String.hasOwnProperty('prototype')
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $ERROR('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////
