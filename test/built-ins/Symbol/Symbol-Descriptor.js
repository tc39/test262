// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Symbol are non enumerable in for-in
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

var objects = [{}, Object.create(Object.prototype), new Array(), new String('stringVal'), new Boolean(false), new Number(3), new Error('error'), new RegExp(), new ArrayBuffer(), new Int16Array(16), new Map(), new WeakMap(), [], Symbol.prototype, function () { }, new Function()];


function verifySymbolsOnObject(obj) {

    var enumSym = Symbol('enumerable');
    var configSym = Symbol('configurable Symbol');
    var writableSym = Symbol('writable Symbol');

    Object.defineProperties(obj, {
        [enumSym]: {
            value: 'symbolProp',
            enumerable: true
        },
        [configSym]: {
            value: 'symbolProp',
            configurable: true
        },
        [writableSym]: {
            value: 'symbolProp',
            writable: true
        },
    });


    if (Object.getOwnPropertyDescriptor(obj,enumSym).enumerable===false) {
        $ERROR('this symbol should be enumerable');
    }

    if (!dataPropertyAttributesAreCorrect(obj, configSym, 'symbolProp', false, false, true)) {
        $ERROR('this symbol should be configurable');
    }

    if (!dataPropertyAttributesAreCorrect(obj, writableSym, 'symbolProp', true, false, false)) {
        $ERROR('this symbol should be writable');
    }
}

function testcase() {
    for (var i in objects) {
        verifySymbolsOnObject(objects[i]);
    }
    return true;
}
runTestCase(testcase);
