// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all with 0-element array
author: Sam Mikes
description: Promise.all([]) produces a promise
---*/

var p = Promise.all([]);

if (!(p instanceof Promise)) {
    $ERROR('Expected Promise.all([]) to be instanceof Promise' + err);
}
