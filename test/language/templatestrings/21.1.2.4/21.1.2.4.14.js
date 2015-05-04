// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs Get(template.raw[0])
---*/

try {
    var raw = { 'length': 1 };
    Object.defineProperty(raw, 0, { get: function() { throw 'expected'; } });

    var template = { 'raw': raw };

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (e !== 'expected') {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
