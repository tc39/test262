// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
description: Checking by using eval
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"BJ\"").toLowerCase() !== "bj") {
  $ERROR('#1: eval("\\"BJ\\"").toLowerCase() === "bj". Actual: '+eval("\"BJ\"").toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
