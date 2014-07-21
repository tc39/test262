// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.POSITIVE_INFINITY is DontDelete
description: Checking if deleting Number.POSITIVE_INFINITY fails
flags: [noStrict]
---*/

// CHECK#1
if (delete Number.POSITIVE_INFINITY !== false) {
  $ERROR('#1: delete Number.POSITIVE_INFINITY === false');
}
