// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var names = [
    "isConcatSpreadable",
    "iterator",
    "match",
    "replace",
    "search",
    "species",
    "hasInstance",
    "split",
    "toPrimitive",
    "unscopables",
    "asyncIterator"
];

for (var name of names) {
    // Well-known symbols exist.
    assert.sameValue(typeof Symbol[name], "symbol");

    // They are never in the registry.
    assert.sameValue(Symbol[name] !== Symbol.for("Symbol." + name), true);

    // They are shared across realms.
    if (typeof Realm === 'function')
        throw new Error("please update this test to use Realms");
    if (typeof newGlobal === 'function') {
        var g = newGlobal();
        assert.sameValue(Symbol[name], g.Symbol[name]);
    }

    // Descriptor is all false.
    var desc = Object.getOwnPropertyDescriptor(Symbol, name);
    assert.sameValue(typeof desc.value, "symbol");
    assert.sameValue(desc.writable, false);
    assert.sameValue(desc.enumerable, false);
    assert.sameValue(desc.configurable, false);
}

