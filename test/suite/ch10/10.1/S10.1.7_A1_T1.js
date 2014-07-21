// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The this value associated with an executioncontext is immutable
description: Checking if deleting "this" fails
---*/

//CHECK#1
if (delete this !== true)
  $ERROR('#1: The this value associated with an executioncontext is immutable. Actual: this was deleted');
