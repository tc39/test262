// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Function Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in functionStore) {
        var fun = functionStore[i];
        var handler = {
            apply: function (tgt, thisBinding, args) {
                if (tgt !== fun) {
                    $ERROR('call: target is incorrect');
                }
                if (this !== handler) {
                    $ERROR('call: this should be handler');
                }
                if (args.length !== 3) {
                    $ERROR('Incorrect arguments length');
                }
                return 'apply';
            },
            construct: function (tgt, args) {
                if (tgt !== fun) {
                    $ERROR('construct: target is incorrect');
                }
                if (args.length !== 3) {
                    $ERROR('Incorrect arguments length');
                }
                return new String('construct');
            },
        };

        var proxy = new Proxy(fun, handler);
        var res = proxy(1, 2, 3);
        if (res !== 'apply') {
            $ERROR('Incorrect return value from calling the function');
        }
    }
    return true;

}
runTestCase(testcase);
