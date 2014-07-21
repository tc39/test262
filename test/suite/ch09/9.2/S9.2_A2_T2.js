// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of boolean conversion from null value is false
description: null convert to Boolean by implicit transformation
---*/

// CHECK#1
if (!(null) !== true) {
  $ERROR('#1: !(null) === true. Actual: ' + (!(null))); 
}
