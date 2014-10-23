// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.resolve
author: Sam Mikes
description: Promise.resolve is a function
---*/

if ((typeof Promise.resolve) !== "function") {
    $ERROR("Expected Promise.resolve to be a function");
}

if (Promise.resolve.length !== 1) {
    $ERROR("Expected Promise.resolve to be a function of one argument");
}
