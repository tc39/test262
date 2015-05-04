// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.IsExtensible for proxy
---*/

//Test1: If IsExtensible is present on handler, we call handler.IsExtensible with right arguments
function testcase1() {
    var target = {};
    var isTrapCalled = false;
    var proxy = new Proxy(target, {
        isExtensible: function (targ) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('IsExtensible handler called on wrong target.');
            }
            return true;
        }
    });
    Object.isExtensible(proxy);

    if (!isTrapCalled) {
        $ERROR('IsExtensible : Failed to call trap.');
    }
}

// Test2 : Returns Target's IsExtensible if trap is undefined
function testcase2() {
    var obj1 = {};
    Object.preventExtensions(obj1);
    var obj2 = {};
    var proxy1 = new Proxy(obj1, {});
    if (Object.isExtensible(proxy1) != Object.isExtensible(obj1)) {
        $ERROR('isExtensible should return target.IsExtensible.');
    }
    var proxy2 = new Proxy(obj2, {});
    if (Object.isExtensible(proxy2) != Object.isExtensible(obj2)) {
        $ERROR('isExtensible should return target.IsExtensible.');
    }
}

// Test3 : Returns Target's IsExtensible if trap is undefined
function testcase3() {
    var target = {};
    var proxy = new Proxy(target, {
        isExtensible: function (target) {
            return false;
        }
    });
    try {
        Object.isExtensible(proxy);
        $ERROR('isExtensible should throw TypeError because target.IsExtensible doesnt match handler return value.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

function testcase4() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        isExtensible: function (obj) {
            return false;
        }
    });
    revocable.revoke();
    try{
        Object.isExtensible(revocable.proxy);
        $ERROR('isExtensible should throw TypeError if called on revoked proxy.');
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
