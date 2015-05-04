// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Testing Object keys cannot list new properties after
    preventExtension
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {
        var target = objectStore[i];
        var emulatedProps = {};  // map of prop names to prop descriptor
        var proxy = createEmulatedProxy(target, emulatedProps);

        emulatedProps.x = { value: 1, enumerable: true, configurable: false };
        Object.preventExtensions(proxy);
        emulatedProps.y = { value: 2, enumerable: true, configurable: false };

        try {
            Object.keys(proxy);
            $ERROR("Object.keys cannot return new properties after prevent Extension");
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR("Incorrect error type");
            }
            else {

            }
        }
    }
    return true;

}
runTestCase(testcase);
