// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Symbol properties on different Object types
includes: [runTestCase.js]
---*/

function verifySymbol(obj, sym) {
    if (obj[sym] === undefined || typeof sym !== 'symbol') {
        return false;
    }
    return true;
}

// helper function which creates symbol and property on an object and verify the correct behavior
function verifySymbolsOnObject(obj1) {

    var sym1 = Symbol('first symbol');
    var sym2 = Symbol('second symbol');

    // symbols can be added using index operators.
    obj1[sym1] = 'got symbol key';

    // or symbols can be added using defineproperty/defineproperties
    Object.defineProperty(obj1, sym2, { value: 'got second symbol key' });

    obj1.sym1 = 'test';
    obj1.sym2 = 'test2';

    if (!verifySymbol(obj1, sym1)) {
        $ERROR("error accessing the symbol key");
    }

    if (!verifySymbol(obj1, sym2)) {
        $ERROR("error accessing the symbol key");
    }


    var val = (obj1.sym1 === 'test' && obj1[sym1] === 'got symbol key' && obj1["sym1"] === 'test');

    if (!val) {
        $ERROR('property names should not collide with Symbol');
    }


    var val = (obj1.sym2 === 'test2' && obj1[sym2] === 'got second symbol key' && obj1["sym2"] === 'test2');

    if (!val) {
        $ERROR('property names should not collide with Symbol');
    }


    var val = (Object.getOwnPropertyNames(obj1).indexOf("sym1") >= 0 && Object.getOwnPropertySymbols(obj1).indexOf(sym1) >= 0 && Object.getOwnPropertyNames(obj1).indexOf(sym1) === -1)
    if (!val) {
        $ERROR('Symbol and property names should be accessible using their getOwnProperty methods');
    }

    var val = obj1.hasOwnProperty(sym1) && obj1.hasOwnProperty('sym1') && obj1.hasOwnProperty(sym2) && obj1.hasOwnProperty("sym2");
    if (!val) {
        $ERROR('hasOwnProperty called on symbol should return true ');
    }
    return true;
}

var objects = [{}, Object.create(Object.prototype), new Array(), new String('stringVal'), new Boolean(false), new Number(3), new Error('error'), new RegExp(), new ArrayBuffer(), new Int16Array(16), new Map(), new WeakMap(), [], Symbol.prototype, function () { },new Function()];

function testcase() {
    for (var i in objects) {
        verifySymbolsOnObject(objects[i]);
    }
    return true;
}
runTestCase(testcase);
