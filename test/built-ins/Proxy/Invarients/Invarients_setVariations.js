// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing with absence/presence of Set traps
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {
        var isSet = false;
        var handler = {
            defineProperty: function (tgt, name, desc) {
                if (name !== 'x') {
                    $ERROR('Incorrect name of property');
                }
                isSet = true;
                return true;
            }
        }

        // Absence of set trap results in calling DefineProperty trap on this
        var proxy = new Proxy(objectStore[i], handler);
        proxy.x = 1;
        if (!isSet) {
            $ERROR('defineProperty trap should have been called');
        }

        // Absence of set doesn't trigger defineProperty trap of parent
        isSet = false;
        var child = Object.create(proxy);
        child.y = 1;
        if (isSet) {
            $ERROR('defineProperty trap should not have been called');
        }
    }

    return true;
}
runTestCase(testcase);
