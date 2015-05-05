// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs Get(template['raw'],'length')
---*/

try {
    var raw = {};
    Object.defineProperty(raw, 'length', { get: function() { throw 'expected'; } });

    var template = { 'raw': raw };

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (e !== 'expected') {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
