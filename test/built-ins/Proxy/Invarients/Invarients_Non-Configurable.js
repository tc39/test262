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

        // Invariant test: Non-configurable properties must be reported by getOwnPropertyDescriptor, getOwnProperty, hasOwnProperty
        var target = objectStore[i];
        var emulatedProps = { x: { value: 1, configurable: false } };

        var success = {};

        Object.defineProperty(target, 'x', emulatedProps.x);
        success.x = true;
        var proxy = createEmulatedProxy(target, emulatedProps, success);
        delete emulatedProps.x;
        try {
            var desc = Object.getOwnPropertyDescriptor(proxy, 'x');
            $ERROR('getOwnPropertyDescriptor should report non-configurable properties');

        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        try {
            var res = Object.prototype.hasOwnProperty.call(proxy, 'x');
            $ERROR('getOwnPropertyDescriptor should fail to extract non-configurable properties if proxy doesnt have that property.');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        try {
            'x' in proxy;
        }
        catch (e) {
            $ERROR('has should report non-configurable properties');
        }
    }
    return true;

}
runTestCase(testcase);
