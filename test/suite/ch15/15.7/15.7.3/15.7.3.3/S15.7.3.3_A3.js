// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MIN_VALUE is DontDelete
description: Checking if deleting Number.MIN_VALUE fails
flags: [noStrict]
---*/

//CHECK#1
if (delete Number.MIN_VALUE !== false) {
  $ERROR('#1: delete Number.MIN_VALUE === false');
}
