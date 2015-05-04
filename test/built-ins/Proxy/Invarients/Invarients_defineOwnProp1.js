// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Object.defineProperty Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {

        // Invariant test: Cannot redefine a non-configurable attribute for a configurable property
        var target = objectStore[i];
        var emulatedProps = {};
        var success = {};
        Object.defineProperty(target, 'x', { value: 'x', configurable: true });
        success.x = true;

        var proxy = createEmulatedProxy(target, emulatedProps,success);


        try {
            Object.defineProperty(proxy, 'x', { value: 'x', configurable: false });

            $ERROR('configurable property cannot be re-defined as non-configurable');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        // Invariant test: Cannot define a non-existent property as non-configurable
        var target2 = objectStore[i];
        var emulatedProps2 = {};
        var success = {};
        success.x = true;

        var proxy = createEmulatedProxy(target2, emulatedProps2,success);

        try {
            Object.defineProperty(proxy, 'x', { value: 'x', configurable: false });
            $ERROR('non-existent property cannot be defined as non-configurable');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
            else {
                return true;
            }
        }
    }

}
runTestCase(testcase);
