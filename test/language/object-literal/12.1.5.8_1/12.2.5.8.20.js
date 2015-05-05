// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Basic identifier reference scenario
includes:
---*/

var a = 10
var obj = {
    a
};

if (obj.a !== 10) {
    $ERROR("obj.a is expected to have the value 10");
}
