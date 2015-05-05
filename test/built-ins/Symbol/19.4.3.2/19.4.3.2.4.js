// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.toString uses SymbolDescriptiveString abstract operation (19.4.3.2.1)
---*/

try {
    var sym = Symbol('test');
    var str = Symbol.prototype.toString.call(sym);

    if (str !== 'Symbol(test)') {
        $ERROR("str !== 'Symbol(test)'");
    }
} catch (e) {
    $ERROR("Unexpected error was thrown " + e);
}
