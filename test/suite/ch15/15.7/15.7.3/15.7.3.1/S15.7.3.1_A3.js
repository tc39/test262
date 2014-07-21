// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.prototype value is +0
description: Checking value of Number.prototype property
---*/

//CHECK#1
if (Number.prototype != 0) {
  $ERROR('#2: Number.prototype == +0');
} else if( 1/Number.prototype != Number.POSITIVE_INFINITY){
  $ERROR('#2: Number.prototype == +0');
}
