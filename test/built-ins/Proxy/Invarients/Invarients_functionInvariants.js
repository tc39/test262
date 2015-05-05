// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Proxies on function Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {

    var emulatedProps = {};
    emulatedProps.x = 'non-object Values';

    var foo = function () { };
    var ctorHandler = {
        construct: function (tgt, thisVal, args) {
            return emulatedProps.x;
        }
    }
    var callHandler = {
        call: function (tgt, thisVal, args) {

        }
    }

    // Invariant test: Proxy with construct handler must return an object
    var ctorProxy = new Proxy(foo, ctorHandler);
    try{
        var c = new ctorProxy();
        $ERROR('return from a constructor must be an object');
    }
    catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect type error');
        }
    }

    // Invariant test: Proxy has a construct method only if target has an original [[construct]] method

    var functs = [Symbol];
    for (var i in functs) {      // Some functions which does not have construct target method
        try {
            var proxy = new Proxy(functs[i], {});
            var s = new proxy();
            $ERROR('Functions does not have construct internal method');

        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('incorrect type error');
            }
        }
    }

    // Invariant test: Proxy has a call method only if target has an original [[call]] method
    try {
        var proxy = new Proxy(Math, {});
        var p = proxy(1, 2, 3);
        $ERROR('Proxy has a call method only if the target has an original [[call]] method');
    }
    catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect type error');
        }
    }
    return true;
}
runTestCase(testcase);
