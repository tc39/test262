// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol constructor performs ToString(description) when description is not undefined
---*/

try {
    var called = false;
    var description = { toString: function() { called = true; return 'success'; } };
    var sym = Symbol(description);

    if (!called) {
        $ERROR("ToString(description) is not called");
    }
} catch (e) {
    $ERROR("No error is expected " + e);
}
