// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: allowProxyTraps helper should default throw on all the proxy trap named methods being invoked
id: pending
author: Jordan Harband
includes: [proxyTrapsHelper.js]
---*/

var traps = allowProxyTraps({
    getPrototypeOf: function () {},
    setPrototypeOf: function () {},
    isExtensible: function () {},
    preventExtensions: function () {},
    getOwnPropertyDescriptor: function () {},
    has: function () {},
    get: function () {},
    set: function () {},
    deleteProperty: function () {},
    defineProperty: function () {},
    enumerate: function () {},
    ownKeys: function () {},
    apply: function () {},
    construct: function () {},
});

function assertTrapSucceeds(trap) {
    if (typeof traps[trap] !== 'function') {
        throw new Test262Error('trap ' + trap + ' is not a function');
    }
    var threw = false;
    try {
        traps[trap]();
        threw = true;
    } catch (e) {}
    if (threw) {
        throw new Test262Error('trap ' + trap + ' threw an error');
    }
}

function assertTrapThrows(trap) {
    if (typeof traps[trap] !== 'function') {
        throw new Test262Error('trap ' + trap + ' is not a function');
    }
    var failedToThrow = false;
    try {
        traps[trap]();
        failedToThrow = true;
    } catch (e) {}
    if (failedToThrow) {
        throw new Test262Error('trap ' + trap + ' did not throw an error');
    }
}

assertTrapSucceeds('getPrototypeOf');
assertTrapSucceeds('setPrototypeOf');
assertTrapSucceeds('isExtensible');
assertTrapSucceeds('preventExtensions');
assertTrapSucceeds('getOwnPropertyDescriptor');
assertTrapSucceeds('has');
assertTrapSucceeds('get');
assertTrapSucceeds('set');
assertTrapSucceeds('deleteProperty');
assertTrapSucceeds('defineProperty');
assertTrapSucceeds('ownKeys');
assertTrapSucceeds('apply');
assertTrapSucceeds('construct');

// enumerate should always throw because the trap has been removed
assertTrapThrows('enumerate');
