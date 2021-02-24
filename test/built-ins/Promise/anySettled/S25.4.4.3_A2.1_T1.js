// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled returns a new promise
es6id: S25.4.4.3_A2.1_T1
author: Sam Mikes
description: Promise.anySettled returns a new promise
---*/

var p = Promise.anySettled([]);

if (!(p instanceof Promise)) {
  $ERROR("Expected Promise.anySettled([]) to return a promise.");
}
