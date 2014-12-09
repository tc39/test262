// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.POSITIVE_INFINITY is DontDelete
es5id: 15.7.3.6_A3
description: Checking if deleting Number.POSITIVE_INFINITY fails
flags: [noStrict]
---*/

// CHECK#1
if (delete Number.POSITIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.POSITIVE_INFINITY === false');
}
