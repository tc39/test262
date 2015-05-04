// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function returning the rest arg 3
---*/

function foo(...args) {
    return args;
}

var restParam = foo();
if (restParam.length !== 0) {
    $ERROR("The rest argument is expected to have length 0, but got " + restParam.length + " instead");
}
