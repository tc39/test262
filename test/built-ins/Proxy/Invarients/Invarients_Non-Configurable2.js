// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing non-configurable Object property's Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {

        // Invariant test: Non-configurable, Non-writable reports stable values.
        var target = objectStore[i];
        var emulatedProps = { x: { value: 1, configurable: false, writable:false } };
        var success = {};
        Object.defineProperty(target, 'x', emulatedProps.x);
        var proxy = createEmulatedProxy(target, emulatedProps, success);
        emulatedProps.x = { value: 2, configurable: false, writable: false };

        try {
            proxy.x;
            $ERROR('Inconsistent values reported for non-configurable, non-writable property');

        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        try {
            'x' in proxy;
            $ERROR('has should report non-configurable properties');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        // Invariant test: Non-configurable, Non-writable cannot be assigned new values.

        try {
            success.x=true;
            proxy.x = 10;
            $ERROR('Non-configurable, non-writable properties cannot be modified');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }
    }
    return true;

}
runTestCase(testcase);
