// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.HasProperty for proxy



---*/

//Test1: If HasProperty is present on handler, we call handler.HasProperty with right arguments
function testcase1() {
    var target = { prop: "value_prop" };
    var isTrapCalled = false;
    var proxy = new Proxy(target, {
        has: function (targ, prop) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('HasProperty handler called on wrong target.');
            }
            if (prop != "prop") {
                $ERROR('HasProperty handler called on wrong property.');
            }
        }
    });
    "prop" in proxy;

    if (!isTrapCalled) {
        $ERROR('HasProperty : Failed to call trap.');
    }
}

//Test2: If hasProperty is not present on handler, we call target.hasProperty
function testcase2() {
    var target = {prop : "value_prop"};
    var proxy = new Proxy(target, {});
    var hasProp = "prop" in proxy;
    if (hasProp == undefined || !hasProp) {
        $ERROR('If hasProperty is not present on handler, we call target.hasProperty');
    }
}

//Test3: If handlerHasProperty returns false and targetDesc is non-configurable, throw TypeError
function testcase3() {
    var target = {};
    Object.defineProperty(target, "prop", {value : 5, configurable : false});
    var proxy = new Proxy(target, {
        has: function (target, prop) {
            return false;
        }
    });
    try
    {
        "prop" in proxy;
        $ERROR('If handlerHasProperty returns false and targetDesc is non-configurable, throw TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test3: If handlerHasProperty returns false and targetDesc is non-extensible, hasProperty throw TypeError
function testcase4() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 5, configurable: true});
    var proxy = new Proxy(target, {
        has: function (target, prop) {
            return false;
        }
    });
    Object.preventExtensions(target);
    try {
        "prop" in proxy;
        $ERROR('If handlerHasProperty returns false and targetDesc is non-configurable, throw TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}


function testcase5() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        has: function (target, prop) {
            return false;
        }
    });
    revocable.revoke();
    try{
        "prop" in revocable.proxy;
        $ERROR('handlerHasProperty should throw TypeError if called on revoked proxy.');
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
