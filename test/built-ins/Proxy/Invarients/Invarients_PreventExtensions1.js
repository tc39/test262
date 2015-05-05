// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Object.preventExtensions Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {

        // Invariant test: Cannot delete a non-configurable property
        var target = objectStore[i];
        var emulatedProps = { x: { value: 1, configurable: false } };
        var success = {};
        Object.defineProperty(target, 'x', emulatedProps.x);
        var proxy = createEmulatedProxy(target, emulatedProps, success);

        var desc = Object.getOwnPropertyDescriptor(proxy,'x');
        if (desc.value !== 1 || desc.configurable !==false) {
            $ERROR('Incorrect descriptor values');
        }

        try {
            success.x = true;
            delete proxy.x;
            $ERROR('cannot delete a non-configurable property');
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
