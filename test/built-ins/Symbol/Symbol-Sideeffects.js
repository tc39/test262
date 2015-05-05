// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing APIs which are modified to incorporate symbols
includes: [runTestCase.js]
---*/

function testcase() {
    var sym = Symbol('a');
    var obj = {};

    Object.defineProperty(obj, sym, { value: 'test', enumerable: true, configurable: true, writable: true });
    for(var i in Object.keys(obj)){
        if(obj[i]==='test'){
            $ERROR('Symbol property keys should not be shown in Object.keys');
        }
    }
    for(var i in Object.getOwnPropertyNames(obj)){
        if(obj[i]==='test'){
            $ERROR('Symbol property keys should not be shown in Object.getOwnPropertyNames');
        }
    }

    for (var i in obj) {
        if ((typeof i) === 'symbol') {
            $ERROR('Symbol property keys should not be enumerable in for-in');
        }
    }
    if (!obj.hasOwnProperty(sym)) {
        $ERROR('HasOwnProperty should return true for Symbol');
    }
    var desc = Object.getOwnPropertyDescriptor(obj, sym);

    if (desc.value!=='test' || desc.enumerable!==true || desc.configurable!==true || desc.writable!==true) {
        $ERROR('GetOwnPropertyDescriptor should return correct values for symbols property keys');
    }

    // throw a symbol and see if it works

    try{
        throw Symbol('throwing a symbol is fun');
    }
    catch (e) {
        if (typeof e !== 'symbol') {
            $ERROR('Incorrect typeof error');
        }
    }

    // JSON stringify object with symbol properties

    var ret = JSON.parse(JSON.stringify(obj));

    if (Object.getOwnPropertySymbols(ret).length > 0) {
        $ERROR("JSON.stringify shouldn't stringify Symbols");
    }

    // TESTING equality and strict equality on Symbols

    var sym = Symbol(1);
    var sym2 = Object(Symbol(1)); // == should still return false

    if (sym == sym2 || sym === sym2) {
        $ERROR('2 different symbols cannot be equal.')
    }

    return true;
}
runTestCase(testcase);
