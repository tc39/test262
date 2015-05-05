// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.Enumerate for proxy



---*/

//Test1: If Enumerate is present on handler, we call handler.Enumerate with right arguments
function testcase1() {
    var target = { prop0: "value_prop0", prop1: "value_prop1" };
    var isTrapCalled = false;
    var proxy = new Proxy(target, {
        enumerate: function (targ) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('enumerate handler called on wrong target.');
            }
            return ['a', 'b', 'c'][Symbol.iterator]();
        }
    });

    for (var p in proxy);

    if (!isTrapCalled) {
        $ERROR('enumerate : Failed to call trap.');
    }
}
//Test2: If Enumerate is not present on handler, we call target.Enumerate
function testcase2() {
    var target = { prop0: "value_prop0", prop1: "value_prop1" };
    var proxy = new Proxy(target, {});
    var props = [{ name: 'prop0', value : "value_prop0" }, { name: 'prop1', value : "value_prop1" } ];
    var index = 0;
    for (p in proxy) {
        if (p != props[index].name && proxy[p] != props[index].value) {
            $ERROR('If Enumerate is not present on handler, we call target.Enumerate');
        }
        index++;
    }
}

//Test3: If handler.Enumerate doesn't return object or undefined, Enumerate throws TypeError
function testcase3() {
    var target = { prop0: "value_prop0", prop1: "value_prop1" };
    var proxy = new Proxy(target, {
        enumerate: function (target, property) {
            return null;
        }
    });

    try{
        for (p in proxy) {
        }
        $ERROR('If handler.Enumerate doesnt return object or undefined, Enumerate should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test3: If handler.Enumerate is present, Enumerate on handler is executed
function testcase3() {
    var target = { prop0: "value_prop0", prop1: "value_prop1" };
    var proxy = new Proxy(target, {
        enumerate: function (target, property) {
            return ['a', 'b', 'c'][Symbol.iterator]();
        }
    });

    var props = ['a', 'b', 'c'];
    var index = 0;
    for (p in proxy) {
        if (p != props[index++]) {
            $ERROR('Doesnt return the enumeration returned by handler.');
        }
    }
}

function testcase4() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        enumerate: function (target, property) {
            return ['a', 'b', 'c'][Symbol.iterator]();
        }
    });
    revocable.revoke();
    try{
        for (var p in revocable.proxy);
        $ERROR('enumerate should throw TypeError if called on revoked proxy.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

testcase1();
testcase2();
testcase3();
testcase4();
