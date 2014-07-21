// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleLowerCase()
description: Call toLocaleLowerCase() function of NaN
---*/

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLocaleLowerCase()!== "nan") {
  $ERROR('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; NaN.toLocaleLowerCase()=== "nan". Actual: '+NaN.toLocaleLowerCase());
}
//
//////////////////////////////////////////////////////////////////////////////
