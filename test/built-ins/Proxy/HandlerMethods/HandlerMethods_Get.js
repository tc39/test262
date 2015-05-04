// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.Get for proxy



---*/

//Test1: If Get is present on handler, we call handler.Get with right arguments
function testcase1() {
    var target = {};
    var isTrapCalled = false;
    var proxy = new Proxy(target, {
        get: function (targ, property, receiver) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('Get handler called on wrong target.');
            }
            if (property != "prop") {
                $ERROR('Get handler called on wrong property argument.');
            }
            if (receiver != proxy) {
                $ERROR('Get handler called on wrong receiver argument.');
            }
            return 100;
        }
    });
    proxy["prop"];

    if (!isTrapCalled) {
        $ERROR('Get : Failed to call trap.');
    }

}

//Test2: If Get is not present on handler, we call target.Get
function testcase2() {
    var target = { prop: "value_prop" };
    var proxy = new Proxy(target, {});
    var val = proxy["prop"];
    if (val == undefined || val != "value_prop") {
        $ERROR('If Get is not present on handler, we should call target.Get');
    }
}

//Test3: If targetDesc is not undefined, non-configurable, non-writable and trapResult is not
// same as targetDesc, Get throws TypeError
function testcase3() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 500 });

    var proxy = new Proxy(target, {
        get: function (target, property, receiver) {
            return 23;
        }
    });

    try{
        var val = proxy["prop"];
        $ERROR('Get should throw TypeError if targetDesc is non-configurable, non-writable and value doesnt match that returned by handler.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}


//Test4: If targetDesc is not undefined, non-configurable, non-writable and trapResult is
// same as targetDesc, Get doens't throws TypeError
function testcase4() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 500 });

    var proxy = new Proxy(target, {
        get: function (target, property, receiver) {
            return 500;
        }
    });

    var val = proxy["prop"];
    if (val == undefined || val != 500) {
        $ERROR('Get should return the value from handler.Get.');
    }
}

//Test5: If targetDesc doesn't have get accessor, non-configurable, and trapResult is not undefined, Get throws TypeError
function testcase5() {
    var target = {};
    Object.defineProperty(target, "prop", {
        set: function (val) { }
    });

    var proxy = new Proxy(target, {
        get: function (target, property, receiver) {
            return 500;
        }
    });

    try{
        var val = proxy["prop"];
        $ERROR(' If targetDesc doesnt have get accessor, non-configurable, and trapResult is not undefined, Get throws TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test6: If targetDesc doesn't have get accessor, non-configurable, and trapResult is undefined,
// Get returns undefined
function testcase6() {
    var target = {};
    Object.defineProperty(target, "prop", {
        set: function (val) { }
    });

    var proxy = new Proxy(target, {
        get: function (target, property, receiver) {
            return undefined;
        }
    });

    var val = proxy["prop"];
    if (val != undefined) {
        $ERROR('If targetDesc doesnt have get accessor, non-configurable, and trapResult is undefined, Get returns undefined');
    }
}

//Test7: With targetDesc have get accessor, trapResult is returned
function testcase7() {
    var target = {};
    Object.defineProperty(target, "prop", {
        get: function () { return 100; },
        set: function (val) { }
    });

    var proxy = new Proxy(target, {
        get: function (target, property, receiver) {
            return 100;
        }
    });

    var val = proxy["prop"];
    if (val != 100) {
        $ERROR(' With targetDesc have get accessor, trapResult is returned by Get.');
    }
}

function testcase8() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        get: function (target, property, receiver) {
            return 100;
        }
    });
    revocable.revoke();
    try{
        var val = revocable.proxy["prop"];
        $ERROR('Get should throw TypeError if called on revoked proxy.');
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
