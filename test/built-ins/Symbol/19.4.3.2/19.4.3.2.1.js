// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.toString throws TypeError if the this argument is a non-object
---*/

try {
    Symbol.prototype.toString.call('string');

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Unexpected error type was thrown " + e);
    }
}
