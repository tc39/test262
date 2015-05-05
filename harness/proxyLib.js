// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Library to watch over Object's prototype
    For example, It creates a proxy for an object's prototype and logs out the trap calls.
---*/

var objectStore = {
    array: new Array(10),
    object: new Object(),
    arrayLiteral: ['start', 1, 2, 'literal'],
    objectLiteral: { p1: 'p1', p2: 'p2' },
    map: new Map(),
    weakMap: new WeakMap(),
    date: new Date(2014, 2, 27),
    string: new String('string object'),
    regex: new RegExp('.', 'g'),
    error: new Error(),
    int32: new Int32Array(128),
    float64: new Float64Array(1024),
    float32: new Float32Array(2048)
};

var functionStore = {
    fun1: function () { },
    fun2: new Function()
}

// Note: Following Idea is taken from Tom Van Cutsem's unit tests for proxies shim https://github.com/tvcutsem/harmony-reflect/blob/master/test/testProxies.js

/* Test the invariants
 *   Create a proxy on the target object
 * - Handler of the proxy returning values from emulated object, different than target Object
 -   Every invarient test modifies emulatedObject and since handler is returning the value from emulatedObject, Runtime should assert on the invariant.
 */


function createEmulatedProxy(target, emulatedProps,success) {
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

