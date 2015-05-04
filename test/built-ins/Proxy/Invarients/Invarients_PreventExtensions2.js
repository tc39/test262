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

        // Invariant test: Cannot report new properties by getOwnPropertyDescriptor, after preventExtension
        var target = objectStore[i];
        var emulatedProps = { x: { value: 1, configurable: false } };
        var success = {};
        Object.defineProperty(target, 'x', emulatedProps.x);
        var proxy = createEmulatedProxy(target, emulatedProps, success);

        Object.preventExtensions(proxy);
        emulatedProps.y = { value: 2, configurable: true };
        try {
            var desc = Object.getOwnPropertyDescriptor(proxy, 'y');
            $ERROR('getOwnPropertyDescriptor cannot report new properties after preventExtensions');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect instanceof Error');
            }
        }

        // Invariant test: A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible.
        var desc = Object.getOwnPropertyDescriptor(proxy, 'x');
        if (desc.value == null || desc.value != 1) {
            $ERROR('getOwnPropertyDescriptor cannot report targets own property as non-existent after preventExtensions.');
        }


        // Invariant test: Cannot report new properties by hasOwn, after preventExtension
        try{
            var result = Object.hasOwnProperty.call(proxy, 'y');
            $ERROR('HasOwnProperty cannot report new properties after preventExtensions.');
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
