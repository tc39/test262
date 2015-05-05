// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.toString uses SymbolDescriptiveString abstract operation (19.4.3.2.1). undefined symbol description becomes empty string
---*/

try {
    var sym = Symbol();
    var str = Symbol.prototype.toString.call(sym);

    if (str !== 'Symbol()') {
        $ERROR("str !== 'Symbol()'");
    }
} catch (e) {
    $ERROR("Unexpected error was thrown " + e);
}
