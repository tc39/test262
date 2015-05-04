// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass undefined for rest parameter
---*/

function foo(...args) {
    if (args.length !== 1) {
        $ERROR("The rest argument is expected to have length 1");
    }
    if (args[0] !== undefined) {
        $ERROR("The first rest argument is expected to be undefined");
    }
}

foo(undefined);
