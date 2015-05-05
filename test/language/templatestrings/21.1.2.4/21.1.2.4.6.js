// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.Raw(template,...substitutions) throws TypeError if template is undefined
---*/

try {
    String.Raw(undefined);

    $ERROR("Expected error was not thrown");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR('Wrong type of error was thrown ' + e);
    }
}
