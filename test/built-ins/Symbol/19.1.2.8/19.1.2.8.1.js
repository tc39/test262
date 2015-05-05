// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object.getOwnPropertySymbols throws TypeError if the this argument is undefined
---*/

try {
    Object.getOwnPropertySymbols(undefined);

    $ERROR("Expected error not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Unexpected error type thrown " + e);
    }
}
