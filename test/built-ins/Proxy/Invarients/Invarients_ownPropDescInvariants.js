// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Testing Object.getOwnPropertyDescriptor cannot return
    'non-existent' for non-configurable property
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {

        var target = {};
        var emulatedProps = {};  // map of prop names to prop descriptor

        // Invariant test: non-configurable property cannot be returned as non-existant

        emulatedProps.x = { value: 'test', configurable: false };
        Object.defineProperty(target, 'x', emulatedProps.x);
        var proxy = createEmulatedProxy(target, emulatedProps);
        delete emulatedProps.x;
        try {
            var desc = Object.getOwnPropertyDescriptor(proxy, 'x');
            $LOG(JSON.stringify(desc));
            $ERROR("Cannot return non-existent for a non-configurable property");
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR("Incorrect error type");
            }
        }

        // Invariant test: non-existant property cannot be returned as non-configurable
        var emulatedProps2 = {};
        var target2 = {};
        emulatedProps2.y = { value: 'test', configurable: false };
        var proxy = createEmulatedProxy(target2, emulatedProps2);
        try{
            var desc = Object.getOwnPropertyDescriptor(proxy, 'y');
            $ERROR("Cannot return non-configurable for a non-existant property");

        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR("Incorrect error type");
            }

        }
        return true;
}
runTestCase(testcase);
