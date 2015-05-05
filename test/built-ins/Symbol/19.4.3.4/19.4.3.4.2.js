// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype[@@toPrimitive] throws TypeError if the this argument is not an object
---*/

try {
    Symbol.prototype[Symbol.toPrimitive].call('string');

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Unexpected error type was thrown " + e);
    }
}
