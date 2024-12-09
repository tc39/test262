// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, sm/non262-object-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

function logProxy(object = {}, handler = {}) {
    var log = [];
    var proxy = new Proxy(object, new Proxy(handler, {
        get(target, propertyKey, receiver) {
            log.push(propertyKey);
            return target[propertyKey];
        }
    }));
    return {proxy, log};
}

var {proxy, log} = logProxy();
Object.preventExtensions(proxy);
assert.deepEqual(log, ["preventExtensions"]);

var {proxy, log} = logProxy();
Object.preventExtensions(Object.preventExtensions(proxy));
assert.deepEqual(log, ["preventExtensions", "preventExtensions"]);

