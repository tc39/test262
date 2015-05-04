// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function with only one parameter which is rest
---*/

function foo(...args) {
    if (args.length !== 1) {
        $ERROR("The rest argument is expected to have length 1");
    }
}

foo(null);
