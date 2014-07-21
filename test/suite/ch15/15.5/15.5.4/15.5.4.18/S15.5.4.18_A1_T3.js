// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
description: Checking by using eval
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"bj\"").toUpperCase() !== "BJ") {
  $ERROR('#1: eval("\\"bj\\"").toUpperCase() === "BJ". Actual: '+eval("\"bj\"").toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
