// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.Set for proxy



---*/

//Test1: If Set is present on handler, we call handler.Set with right arguments// Test1 : Handler null
function testcase1() {
    var target = {a : "as"};
    var proxy = new Proxy(target, {
        set: function (targ, property, value, receiver) {
            if (targ != target) {
                $ERROR('Set handler called on wrong target.');
            }
            if (property != "prop") {
                $ERROR('Set handler called on wrong property argument.');
            }
            if (value != 5) {
                $ERROR('Set handler called on wrong value argument.');
            }
            if (receiver != proxy) {
                $ERROR('Set handler called on wrong receiver argument.');
            }
        }
    });
    proxy["prop"] = 5;
}

//Test2: If Set is not present on handler, we call target.Set
function testcase2() {
    var target = {};
    var proxy = new Proxy(target, {});
    proxy["prop"] = "value_prop";
    if (target["prop"] == undefined || target["prop"] != "value_prop") {
        $ERROR('If Set is not present on handler, we should call target.Set');
    }
}

//Test3: If targetDesc is not undefined, non-configurable, non-writable and trying to set different value than
// targetDesc, Set throws TypeError
function testcase3() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 500 });

    var proxy = new Proxy(target, {
        set: function (target, property, value, receiver) {
            return true;
        }
    });

    try{
        proxy["prop"] = 23;
        $ERROR('If targetDesc is not undefined, non-configurable, non-writable and trying to set different value than targetDesc, Set throws TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test4: If targetDesc doesn't have set accessor, non-configurable, Set throws TypeError
function testcase4() {
    var target = {};
    Object.defineProperty(target, "prop", {
        get: function () { return 1; }
    });

    var proxy = new Proxy(target, {
        set: function (target, property, value, receiver) {
            return 500;
        }
    });

    try{
        proxy["prop"] = 2;
        $ERROR(' If targetDesc doesnt have get accessor, non-configurable, and trapResult is not undefined, Get throws TypeError.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test5: With targetDesc have set accessor, value set is that by handler's Set
function testcase5() {
    var target = {};
    var isTrapCalled = false;
    Object.defineProperty(target, "prop", {
        get: function () { return val; },
        set: function (value) { val = value; }
    });
    target["prop"] = 100;

    var proxy = new Proxy(target, {
        set: function (target, property, value, receiver) {
            isTrapCalled = true;
            target[property] = 150;
            return true;
        }
    });

    proxy["prop"] = 200;
    var val = proxy["prop"];
    if (val != 150) {
        $ERROR('With targetDesc have set accessor, value set is that by handlers Set.');
    }

    if (!isTrapCalled) {
        $ERROR('Set : Failed to call trap.');
    }
}

function testcase5() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        set: function (target, property, value, receiver) {
            return true;
        }
    });
    revocable.revoke();
    try{
        revocable.proxy["prop"] = 200;
        $ERROR('set should throw TypeError if called on revoked proxy.');
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
