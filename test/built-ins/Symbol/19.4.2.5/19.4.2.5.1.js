// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.keyFor(sym) throws TypeError if sym is not a symbol
---*/

try {
    Symbol.keyFor('');

    $ERROR("Expected error not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Non-TypeError was thrown " + e);
    }
}
