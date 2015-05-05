// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Testing Symbols with different Object creation APIs, get-set and
    nested Symbols
includes: [runTestCase.js]
---*/

function verifySymbol(obj, sym,val) {
    if (obj[sym] !== val || typeof sym !== 'symbol') {
        return false;
    }
    return true;
}


function testcase() {
    var obj1 = new Object();
    var sym1 = Symbol('test');
    obj1[sym1] = 'got symbol value';


    var obj2 = Object.create(obj1);
    if (obj2[sym1] !== 'got symbol value' && Object.getOwnPropertySymbols(obj2).length !== 0) {
        $ERROR('error accessing symbol on object prototype');
    }

    // object with getter/setter properties as symbols.
    var obj = { a: 1 };
    var mysym = Symbol('mysym');
    Object.defineProperty(obj, mysym, { get: function () { return this.a; }, set: function (p) { this.a = p; } });
    obj[mysym] = 4;
    if (!verifySymbol(obj, mysym,4)) {
        $ERROR('error accessing symbol used with getter-setters');
    }

    // Specifying nested symbol properties
    var sym11 = Symbol('sym11');
    var sym12 = Symbol('sym12',Symbol('adding another arg for fun',Symbol('and another')));
    var sym13 = Symbol('sym13',sym11,sym12);

    var obj = { sym11: { sym12: { sym13: 'string property' } } };
    obj[sym11] = {};
    obj[sym11][sym12] = {};
    obj[sym11][sym12][sym13] = 'symbol property';

    return (verifySymbol(obj, sym11, obj[sym11]) && verifySymbol(obj[sym11], sym12, obj[sym11][sym12]) && verifySymbol(obj[sym11][sym12], sym13, "symbol property"));

}
runTestCase(testcase);
