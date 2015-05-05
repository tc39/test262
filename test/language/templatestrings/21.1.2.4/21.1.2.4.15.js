// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) performs ToString(template.raw[0])
---*/

try {
    var raw = { 'length': 1, 0: Symbol() };
    var template = { 'raw': raw };

    String.raw(template);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
