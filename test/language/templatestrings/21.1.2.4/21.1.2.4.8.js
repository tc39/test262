// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs Get(template,'raw')
---*/

try {
    var template = { };
    Object.defineProperty(template, 'raw', { get: function() { throw 'expected'; } });

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (e !== 'expected') {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
