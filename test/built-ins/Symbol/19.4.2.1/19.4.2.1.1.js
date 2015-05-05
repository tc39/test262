// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.for(key) performs ToString(key)
---*/

try {
    var called = false;
    var key = { toString: function() { called = true; return 'success'; } };
    var sym = Symbol.for(key);

    if (!called) {
        $ERROR("called === false");
    }
} catch (e) {
    $ERROR("No error is expected " + e);
}
