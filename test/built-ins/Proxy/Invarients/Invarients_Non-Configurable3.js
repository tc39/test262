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

        // Invariant test: Non-configurable, Non-enumerable properties must be reported by GOPN.
        var target = objectStore[i];
        var emulatedProps = {
            x: { value: 1, configurable: false, enumerable: false },
            y: { value: 2, configurable: false, enumerable: true },
            z: { value: 3, configurable: false, enumerable: true }
        };

        Object.defineProperty(target, 'x', emulatedProps.x);
        Object.defineProperty(target, 'y', emulatedProps.y);
        Object.defineProperty(target, 'z', emulatedProps.z);
        var proxy = createEmulatedProxy(target, emulatedProps);

        delete emulatedProps.x;
        try {
          var res = Object.getOwnPropertyNames(proxy);
          $ERROR('Non-configurable, enumerable properties must be reported by Object.getOwnPropertyNames');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        // Invariant test: Non-configurable, enumerable properties must be reported by keys.
        delete emulatedProps.y;
        try {
            var res = Object.keys(proxy);
            $ERROR('Non-configurable, enumerable properties must be reported by Object.keys');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        // Invariant test: Non-configurable, enumerable properties must be reported by enumerate

        try {
            delete emulatedProps.z;
            for (var name in Object.create(proxy)) {
            }
            $ERROR('Non-configurable, enumerable properties must be reported by enumerate');

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
