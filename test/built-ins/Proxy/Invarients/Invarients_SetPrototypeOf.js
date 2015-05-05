// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.SetPrototypeOf Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/
function testcase() {
    for (var i in objectStore) {


        var target = objectStore[i];
        var emulatedProps = {};
        var success = {};
        Object.defineProperty(target, 'x', { value: 'x', configurable: true });
        success.x = true;

        var proxy = createEmulatedProxy(target, emulatedProps, success);

        var prototypeOfProxy = { y: "a" };
        Object.setPrototypeOf(proxy, prototypeOfProxy);


        // Invariant test:
        // If the target object is not extensible, the argument value must be the same as
        // the result of [[GetPrototypeOf]] applied to target object.
        var prototypeOfTarget = Object.getPrototypeOf(target);
        if (prototypeOfProxy != prototypeOfTarget) {
            $ERROR('GetPrototypeOf of proxy that was set using SetPrototypeOf and prototype of target should be same');
        }
    }

    return true;
}
runTestCase(testcase);
