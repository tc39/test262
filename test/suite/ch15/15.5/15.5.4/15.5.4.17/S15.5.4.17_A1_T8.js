// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
description: Call toLocaleLowerCase() function of Infinity
---*/

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

if (Infinity.toLocaleLowerCase()!== "infinity") {
  $ERROR('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; Infinity.toLocaleLowerCase()=== "infinity". Actual: '+Infinity.toLocaleLowerCase());
}
