// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
description: Checking by using eval
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"BJ\"").toLocaleLowerCase() !== "bj") {
  $ERROR('#1: eval("\\"BJ\\"").toLocaleLowerCase() === "bj". Actual: '+eval("\"BJ\"").toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
