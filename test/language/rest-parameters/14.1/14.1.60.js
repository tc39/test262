// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check function length
---*/

function foo(...args) {
    return args;
}

if (foo.length !== 0) {
    $ERROR("Method is expected to have a length of 0");
}
