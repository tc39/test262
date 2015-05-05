// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.Delete for proxy



---*/

// Test1 : Handler null
function testcase1() {
    try {
        var proxy = new Proxy({}, null);
        $ERROR('Set should throw TypeError if handle is null.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test2: If Delete is not present on handler, we call target.Delete
function testcase2() {
    var target = { prop: "value_prop" };
    var proxy = new Proxy(target, {});
    delete proxy["prop"];
    if (target["prop"] != undefined) {
        $ERROR('If Delete is not present on handler, we call target.Delete.');
    }
}

//Test3: If handler.Delete returns false, return false.
function testcase3() {
    var target = { prop: "value_prop" };
    var proxy = new Proxy(target, {
        deleteProperty: function (target, property) {
            return false;
        }
    });

    var ret = delete proxy["prop"];
    if (ret || target["prop"] == undefined) {
        $ERROR('If handler.Delete returns false, delete should return false instead of deleting the property from target.');
    }
}

//Test4: If targetDesc doesn't have property to delete, handler returns true
function testcase4() {
    var target = {};
    Object.defineProperty(target, "prop", {value : 500, configurable : false});
    var proxy = new Proxy(target, {
        deleteProperty: function (target, property) {
            return true;
        }
    });
    try{
        var ret = delete proxy["prop"];
        $ERROR('If targetDesc doesnt have property to delete, handler returns true.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test5: If Delete is present on handler, we call handler.Delete with right arguments
function testcase5() {
    var target = {};
    var isTrapCalled = false;
    Object.defineProperty(target, "prop", { value: 500, configurable: false });
    var proxy = new Proxy(target, {
        deleteProperty: function (tar, prop) {
            isTrapCalled = true;
            if (tar != target) {
                $ERROR('delete handler called on wrong target.');
            }
            if (prop != "prop") {
                $ERROR('delete handler called on wrong property argument.');
            }
            return true;
        }
    });
    try {
        var ret = delete proxy["prop"];
        $ERROR('If targetDesc doesnt have property to delete, handler returns true.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }

    if (!isTrapCalled) {
        $ERROR('delete : Failed to call trap.');
    }
}

function testcase6() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        deleteProperty: function (tar, prop) {
            return false;
        }
    });
    revocable.revoke();
    try{
        delete revocable.proxy["prop"];
        $ERROR('delete should throw TypeError if called on revoked proxy.');
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
