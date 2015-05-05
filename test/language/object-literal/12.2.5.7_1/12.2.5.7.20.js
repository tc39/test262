// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Throw an exception from the computed
    property name calculation
---*/

try {
    var obj = {
        [(function() { throw "Error"; })()] : 10
    };
    $ERROR("Didn't throw an expected error");
} catch (error) {
    if (error !== "Error") {
        $ERROR("Expected to throw Error but got " + error + " instead");
    }
}
