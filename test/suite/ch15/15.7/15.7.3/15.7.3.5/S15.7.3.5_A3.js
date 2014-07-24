// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.NEGATIVE_INFINITY is DontDelete
es5id: 15.7.3.5_A3
description: Checking if deleting Number.NEGATIVE_INFINITY fails
flags: [noStrict]
---*/

// CHECK#1
if (delete Number.NEGATIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.NEGATIVE_INFINITY === false');
}
