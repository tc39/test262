// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Does not pass anything to the rest parameter
---*/

function foo(...args) {
    if (args.length !== 0) {
        $ERROR("Rest argument is expected to be of length 0");
    }
}

foo();
