// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: An expression is thrown from the computed property expression
includes:
---*/

function throwError() {
    throw 'ExpectedError';
}

try {
    var ob = {
        [throwError()] : 10
    };
    $ERROR("Didn't throw an ExpectedError.");
} catch (error) {
    if (error !== "ExpectedError") {
        $ERROR("Got an unexpected error while expecting ExpectedError.");
    }
}
