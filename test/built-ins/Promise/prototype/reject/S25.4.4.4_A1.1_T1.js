// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.reject
author: Sam Mikes
description: Promise.reject is a function
---*/

if ((typeof Promise.reject) !== "function") {
    $ERROR("Expected Promise.reject to be a function");
}

if (Promise.reject.length !== 1) {
    $ERROR("Expected Promise.reject to be a function of one argument");
}
