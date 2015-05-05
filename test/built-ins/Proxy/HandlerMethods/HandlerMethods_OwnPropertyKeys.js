// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.OwnPropertyKeys for proxy



---*/

//Test1: If OwnPropertyKeys is present on handler, we call handler.OwnPropertyKeys with right arguments
function testcase1() {
    var target = {};
    var isTrapCalled = false;
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (targ) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('OwnPropertyKeys handler called on wrong target.');
            }
            return ['prop0'];
        }
    });
    Object.getOwnPropertyNames(proxy);

    if (!isTrapCalled) {
        $ERROR('OwnPropertyKeys : Failed to call trap.');
    }
}

//Test2: If getOwnPropertyNames is not present on handler, we call target.getOwnPropertyNames
function testcase2() {
    var target = { prop0: "value_prop0", prop1: "value_prop1" };
    var proxy = new Proxy(target, {});
    var expected = ['prop0', 'prop1'];
    var vals = Object.getOwnPropertyNames(proxy);
    var index = 0;
    for (p in proxy) {
        if (p != expected[index++]) {
            $ERROR('If getOwnPropertyNames is not present on handler, should call target.getOwnPropertyNames');
        }
    }
}

//Test3: If target's property is non-configurable, getOwnPropertyNames throws TypeError if the property is not present in handlerResult.
function testcase3() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['a', 'b', 'c'];
        }
    });

    try {
        var actual = Object.getOwnPropertyNames(proxy);
        $ERROR('If one of the targets property is non-configurable, getOwnPropertyNames should throw TypeError if the property is not present in handlerResult.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }

}

//Test4: If target's properties are configurable and target is extensible, getOwnPropertyNames return the result of handler.GetOwnPropertyName
// and doesn't throw TypeError even if targetPropertyNames doesnt match handlerResult
function testcase4() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: true });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['a', 'b', 'c'];
        }
    });

    var expected = ['a', 'b', 'c'];
    var actual = Object.getOwnPropertyNames(proxy);
    if (expected.length != actual.length) {
        $ERROR('If all the targets properties are configurable and target is non-extensible, getOwnPropertyNames return the result of handler.GetOwnPropertyName.');
    }
    var index = 0;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] != expected[i]) {
            $ERROR('If all the targets properties are configurable and target is non-extensible, getOwnPropertyNames return the result of handler.GetOwnPropertyName.');
        }
    }
}

//Test5: If target's properties are configurable and target is non-extensible, getOwnPropertyNames throws TypeError
// if targetPropertyNames doesnt match handlerResult
function testcase5() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: true });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['a', 'b', 'c'];
        }
    });

    Object.preventExtensions(target);

    try {
        var actual = Object.getOwnPropertyNames(proxy);
        $ERROR('If all the targets properties are configurable and target is non-extensible, getOwnPropertyNames should throw TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test6: If target's properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames throws TypeError
// if targetPropertyNames doesnt match handlerResult
function testcase6() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['prop0', 'prop1', 'prop2', 'prop3'];
        }
    });

    Object.preventExtensions(target);

    try {
        var actual = Object.getOwnPropertyNames(proxy);
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames should throw TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test7: If target's properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames throws TypeError
// if targetPropertyNames doesnt match handlerResult
function testcase7() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['prop0', 'prop1'];
        }
    });

    Object.preventExtensions(target);

    try {
        var actual = Object.getOwnPropertyNames(proxy);
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames should throw TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test8: If target's properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler
function testcase8() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: true });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['prop0', 'prop1', 'prop2'];
        }
    });

    Object.preventExtensions(target);

    var expected = ['prop0', 'prop1', 'prop2']
    var actual = Object.getOwnPropertyNames(proxy);
    if (expected.length != actual.length) {
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
    }
    var index = 0;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] != expected[i]) {
            $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
        }
    }
}

//Test9: If target is extensible and all non-configurable properties are present in trapResult, ownKeys doesn't throw even if configurable keys are missing from trapResult
function testcase9() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: false });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['prop0', 'prop1'];
        }
    });

    var expected = ['prop0', 'prop1']
    var actual = Object.getOwnPropertyNames(proxy);
    if (expected.length != actual.length) {
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
    }
    var index = 0;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] != expected[i]) {
            $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
        }
    }
}


//Test10: If target is extensible and all non-configurable properties are present in trapResult, ownKeys doesn't throw if result contains keys not present in target
function testcase10() {
    var target = {};
    Object.defineProperty(target, "prop0", { value: 0, configurable: false });
    Object.defineProperty(target, "prop1", { value: 1, configurable: false });
    Object.defineProperty(target, "prop2", { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return ['prop0', 'prop1', 'a', 'b'];
        }
    });

    var expected = ['prop0', 'prop1', 'a', 'b']
    var actual = Object.getOwnPropertyNames(proxy);
    if (expected.length != actual.length) {
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
    }
    var index = 0;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] != expected[i]) {
            $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
        }
    }
}

//Test11: If target is extensible and all non-configurable properties/symbols are present in trapResult, ownKeys doesn't throw if result contains keys not present in target
function testcase11() {
    var target = {};
    var prop1 = Symbol("prop1");
    var prop2 = Symbol("prop2");
    var prop3 = Symbol("prop3");

    Object.defineProperty(target, prop1, { value: 0, configurable: false });
    Object.defineProperty(target, prop2, { value: 1, configurable: false });
    Object.defineProperty(target, prop3, { value: 2, configurable: true });
    var proxy = new Proxy(target, {
        ownKeys: function (target) {
            return [prop1, prop2, 'a', 'b'];
        }
    });

    var expected = [prop1, prop2];
    var actual = Object.getOwnPropertySymbols(proxy);
    if (expected.length != actual.length) {
        $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
    }
    var index = 0;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] != expected[i]) {
            $ERROR('If targets properties are configurable/non-configurable and target is non-extensible, getOwnPropertyNames returns props return by handler.');
        }
    }
}

function testcase12() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        ownKeys: function (obj) {
            return ['a'];
        }
    });
    revocable.revoke();
    try{
        Object.getOwnPropertyNames(revocable.proxy);
        $ERROR('ownKeys should throw TypeError if called on revoked proxy.');
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
testcase5();
testcase6();
testcase7();
testcase8();
testcase9();
testcase10();
testcase11();
testcase12();
