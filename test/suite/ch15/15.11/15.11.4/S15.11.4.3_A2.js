// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of Error.prototype.message is ""
description: Checking value of Error.prototype.message
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (typeof Error.prototype.message !== "string") {
  $ERROR('#1: typeof Error.prototype.message === "string". Actual: ' + Error.prototype.message);
}
//
//////////////////////////////////////////////////////////////////////////////
