// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Undeclared vaiable used as IdentifierReference
includes:
---*/

try {
    var obj = {
        a
    };
    $ERROR("A reference error was expected before this statement");
} catch (error) {
    if (!(error instanceof ReferenceError)) {
        $ERROR("A reference error was expected but got " + error);
    }
}
