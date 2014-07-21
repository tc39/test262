// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.NaN is DontDelete
description: Checking if deleting Number.NaN fails
flags: [noStrict]
---*/

// CHECK#1
if (delete Number.NaN !== false) {
  $ERROR('#1: delete Number.NaN === false');
}
