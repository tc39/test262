// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
author: Sam Mikes
description: Promise.resolve passes through a promise w/ same Constructor
---*/

var p1 = Promise.resolve(1),
    p2 = Promise.resolve(p1);

if (p1 !== p2) {
    $ERROR("Expected p1 === Promise.resolve(p1) because they have same constructor");
}
