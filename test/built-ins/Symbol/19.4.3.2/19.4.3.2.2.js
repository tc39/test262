// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.toString throws TypeError if the this argument does not have a [[SymbolData]] internal slot
---*/

try {
    Symbol.prototype.toString.call({});

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Unexpected error type was thrown " + e);
    }
}
