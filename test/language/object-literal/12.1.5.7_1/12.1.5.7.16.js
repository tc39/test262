// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] ComputedPropertyName has an undefined
    identifier in it
---*/

try {
    var obj = {
        [b] : 20
    };
    $ERROR("An expected Runtime Error wasn't thrown");
} catch (error) {
    if (!(error instanceof ReferenceError)) {
        $ERROR("Was expecting a ReferenceError but got " + error + " instead");
    }
}
