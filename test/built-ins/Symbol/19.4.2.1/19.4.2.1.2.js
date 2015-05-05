// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.for(key) performs ToString(key). If it throws, Symbol.key throws
---*/

try {
    var key = { toString: function() { throw 'expected' } };
    var sym = Symbol.for(key);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (e !== 'expected') {
        $ERROR("Unexpected error was thrown " + e);
    }
}
