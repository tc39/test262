// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Object.getOwnPropertyDescriptor Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {

    // Invariant test: Report non-configurable for a configurable property
    var target = {};
    var emulatedProps = {};
    emulatedProps.x = { value: 1, configurable: false };
    Object.defineProperty(target, 'x', { value: 1, configurable: true });
    var proxy = createEmulatedProxy(target, emulatedProps);

    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, 'x');
        $LOG(JSON.stringify(desc));
        $ERROR('configurable property cannot be reported as non-configurable');
    }
    catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }

    // Invariant test: Result of GetOwnProperty can be applied to target object and it will not throw exception.
    var target2 = {};
    var emulatedProps2 = {};
    emulatedProps2.x = { value: 1, configurable: true };
    var proxy = createEmulatedProxy(target2, emulatedProps2);

    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, 'x');
        Object.defineProperty(target2, 'x', desc);
    }
    catch (e) {
        $ERROR('Error should not be reported');
    }

    // Invariant test: result of getOwnPropertyDescriptor is always an object or undefined
    var emulatedProps3 = {};
    var target3 = {};
    emulatedProps3.y = null;
    var proxy = createEmulatedProxy(target3, emulatedProps3);
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, 'y');
        $ERROR("Cannot return null from getOwnPropertyDescriptor");
    }
    catch (e) {

        if (!(e instanceof TypeError)) {
            $ERROR("Incorrect error type");
        }

    }
    return true;
    return true;

}
runTestCase(testcase);
