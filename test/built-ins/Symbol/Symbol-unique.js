// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Symbol are unique and they are value types
includes: [runTestCase.js]
---*/

function testcase() {
    if(Symbol()===Symbol()){
        $ERROR('1. Symbols are unique');
    }

    var Obj = {};
    Obj[Symbol(1)] = 'test';

    if (Obj[Symbol(1)] !== undefined) {
        $ERROR('2. Symbols are unique');
    }

    var map = new Map();
    map.set(Symbol(1), 1);
    if (map.get(Symbol(1)) === 1) {
        $ERROR('3. Symbols are unique');
    }

    var obj = {};
    var s1=Symbol(1);
    obj[s1]='first symbol';
    s1=undefined;
    var sym = Object.getOwnPropertySymbols(obj)[0];
    if ( obj[sym]!== 'first symbol') {
        $ERROR('4. Symbols are value type');
    }

    var obj = {};
    var s1 = Symbol();
    var s2 = Symbol();
    obj[s1] = 'first';
    obj[s2] = 'second';
    s2 = s1;

    var sym2=Object.getOwnPropertySymbols(obj)[1];
    if (obj[s2] !== 'first' &&  obj[sym2]!== 'second') {
        $ERROR('5. Symbols are value type');
    }

    var fun = function (val) { val = 'test'; }
    var s = Symbol('test');
    var obj = {};
    obj[s] = 'symbol value';
    fun(s);
    if (obj[s] !== 'symbol value') {
        $ERROR('6. Symbols are value type');
    }


    if ((s instanceof Symbol)) {
        $ERROR('7. instanceof Symbol should return false.');
    }

    if (Symbol.prototype.constructor !== Symbol || (Symbol.prototype instanceof Symbol)) {
        $ERROR('8. Symbol.prototype is not an instance of Symbol');
    }

    var symParent = Symbol('I am the parent Symbol');
    var symChild = Symbol('I am the child Symbol');
    var prop = "having string prop";

    symParent[symChild] = 'child found its parent';
    symParent[prop] = 'having string propertry';

    if (symParent[symChild]) {
        $ERROR('9. Symbols are value types and cannot have symbols properties.');
    }

    if (symParent[prop]) {
        $ERROR('10. Symbol are value types and cannot have properties.')
    }

    return true;


}
runTestCase(testcase);
