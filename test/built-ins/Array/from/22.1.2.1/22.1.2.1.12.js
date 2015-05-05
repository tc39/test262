// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this argument is passed as null
---*/

//

function mapFn(value, index) {
    $ERROR("mapFn is not expected to be called. Called for " + value + " and index " + index);
}

try {
    Array.from.call(null);
    $ERROR("Error: Expected to throw a TypeError but map didn't throw");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
    }
}
