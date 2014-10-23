// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.race returns a new promise
author: Sam Mikes
description: Promise.race returns a new promise
---*/

var p = Promise.race([]);

if (!(p instanceof Promise)) {
    $ERROR("Expected Promise.race([]) to return a promise.");
}
