// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing with absence/presence of Set traps
includes:
    - runTestCase.js
    - proxyLib.js
---*/

var objectStore = {
    object: new Object(),

}

var functionStore = {
    fun: function () { return "function from function Store"; }
}

// Note: Following Idea is taken from Tom Van Cutsem's unit tests for proxies shim https://github.com/tvcutsem/harmony-reflect/blob/master/test/testProxies.js

/* Test the invariants
 *   Create a proxy on the target object
 * - Handler of the proxy returning values from emulated object, different than target Object
 -   Every invarient test modifies emulatedObject and since handler is returning the value from emulatedObject, Runtime should assert on the invariant.
 */


function createEmulatedProxy(target, emulatedProps, success) {
    var emulatedProto = Object.getPrototypeOf(target);
    var handler = {
        getOwnPropertyDescriptor: function (target, name) {
            return emulatedProps[name];
        },
        defineProperty: function (target, name, desc) {
            emulatedProps[name] = desc;
            return success[name];
        },
        preventExtensions: function (target) {
            Object.defineProperties(target, emulatedProps);
            Object.preventExtensions(target);
            return true;
        },
        deleteProperty: function (target, name) {
            delete emulatedProps[name];
            return success[name];
        },
        get: function (target, name, receiver) {
            var desc = emulatedProps[name];
            if (desc === undefined) { return emulatedProto[name]; }
            if ('value' in desc) return desc.value;
            if ('get' in desc) return desc.get.call(target);
        },
        set: function (target, name, value, receiver) {
            return success[name];
        },
        has: function (target, name) {
            return !emulatedProps[name];
        },
        hasOwn: function (target, name) {
            $LOG('hasOwn called: ' + emulatedProps[name]);
            return !!emulatedProps[name];
        },
        ownKeys: function (target) {
            return Object.getOwnPropertyNames(emulatedProps);
        },
        enumerate: function (target) {
            return Object.getOwnPropertyNames(emulatedProps).filter(function (name) {
                return emulatedProps[name].enumerable;
            });
        }
    };

    return new Proxy(target, handler);
}



function testcase() {
    for (var i in objectStore) {

        var handler = { get: function () { return 1; } };
        var tuple = Proxy.revocable(objectStore[i], handler);
        if (tuple.proxy.x !== 1) {
            $ERROR('Incorrect value returned from proxy ');
        }
        tuple.revoke();
        try{
            tuple.proxy.x;
            $ERROR('proxy is revoked');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('Incorrect error type');
            }
        }
        try {
            tuple.proxy.x=2;
            $ERROR('proxy is revoked');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('Incorrect error type');
            }
        }
        try {
            delete tuple.proxy.x;
            $ERROR('proxy is revoked');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('Incorrect error type');
            }
        }
        try {
            Object.isExtensible(tuple.proxy);
            $ERROR('proxy is revoked');
        }
        catch (e) {
            if (!(e instanceof TypeError)) {
                $ERROR('Incorrect error type');
            }
        }
        if ((typeof tuple.proxy) !== 'object') {
            $ERROR('typeof should work on revokable proxy');
        }
    }

    return true;
}
runTestCase(testcase);
