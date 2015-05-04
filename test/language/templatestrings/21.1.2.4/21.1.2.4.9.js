// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs ToObject(template['raw']) which throws if property value is undefined
---*/

try {
    var template = { };
    Object.defineProperty(template, 'raw', { get: function() { return undefined; } });

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
