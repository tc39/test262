// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled is callable
es6id: S25.4.4.3_A1.1_T1
author: Sam Mikes
description: Promise.anySettled is callable
---*/

if (typeof Promise.anySettled !== "function") {
  $ERROR("Expected Promise.anySettled to be a function, actually " + typeof Promise.anySettled);
}
