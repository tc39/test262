// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.toString unwraps Symbol wrapper objects
---*/

try {
    var sym = Symbol('test');
    var obj = Object(sym);
    var str = Symbol.prototype.toString.call(obj);

    if (str !== 'Symbol(test)') {
        $ERROR("str !== 'Symbol(test)'");
    }
} catch (e) {
    $ERROR("Unexpected error was thrown " + e);
}
