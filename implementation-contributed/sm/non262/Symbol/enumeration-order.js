// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
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

// Symbols follow all other property keys in the result list.
var log;
function LoggingProxy() {
    return new Proxy({}, {
        defineProperty: (t, key, desc) => {
            log.push(key);
            return true;
        }
    });
}

var keys = [
    "before",
    Symbol(),
    "during",
    Symbol.for("during"),
    Symbol.iterator,
    "after"
];
var descs = {};
for (var k of keys)
    descs[k] = {configurable: true, value: 0};

function test(descsObj) {
    log = [];
    Object.defineProperties(LoggingProxy(), descs);
    assert.sameValue(log.length, keys.length);
    assert.deepEqual(log.map(k => typeof k), ["string", "string", "string", "symbol", "symbol", "symbol"]);
    for (var key of keys)
        assert.sameValue(log.indexOf(key) !== -1, true);
}

test(descs);
test(new Proxy(descs, {}));

