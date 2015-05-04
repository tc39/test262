// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield is allowed in strict mode
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    "use strict";
    yield;
}
var iter = gfoo();
