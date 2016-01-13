// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values should fail if given a null or undefined value
es7id: pending
author: Jordan Harband
---*/

assert.throws(TypeError, function () {
    Object.values(null);
});

assert.throws(TypeError, function () {
    Object.values(undefined);
});
