// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.GetOwnProperty for proxy



---*/

//Test1: If GetOwnProperty is present on handler, we call handler.GetOwnProperty with right arguments
function testcase1() {
    var target = {};
    var isTrapCalled = true;
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (targ, prop) {
            isTrapCalled = true;
            if (targ != target) {
                $ERROR('GetOwnProperty handler called on wrong target.');
            }
            if (prop != "prop") {
                $ERROR('GetOwnProperty handler called on wrong property argument.');
            }
            return { value: 23, configurable : true };
        }
    });
    Object.getOwnPropertyDescriptor(proxy, "prop");

    if (!isTrapCalled) {
        $ERROR('getOwnPropertyDescriptor : Failed to call trap.');
    }
}

//Test2: If getOwnProperty is not present on handler, we call target.getOwnProperty
function testcase2() {
    var proto = { prop0: 'inherited_fromProto' };
    var target = Object.create(proto);
    Object.defineProperty(target, "prop0", { value: 'on_object' });
    var proxy = new Proxy(target, {});
    var desc = Object.getOwnPropertyDescriptor(proxy, 'prop0');
    if (desc === 'undefined' || desc.value == 'undefined' || desc.value !=  'on_object') {
        $ERROR('getOwnPropertyDescriptor should return the value from targets getOwnPropertyDescriptor.');
    }
}

//Test3: If getOwnProperty of trap doesn't return object or null, TypeError is thrown
function testcase3() {
    var proto = { prop0: 'value_prop0' };
    var target = Object.create(proto);
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (obj) {
            return 1;
        }
    });
    try{
        var desc = Object.getOwnPropertyDescriptor(proxy, 'prop0');
        $ERROR('If getOwnProperty of trap doesnt return object or null, TypeError is thrown.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test4: If trapResult for getOwnProperty is undefined and targetDesc is undefined then return undefined
function testcase4() {
    var proxy = new Proxy({}, {});
    var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
    if (desc != undefined) {
        $ERROR('If trapResult for getOwnProperty is undefined and targetDesc is undefined then return undefined.');
    }
}

//Test5: If trapResult for getOwnProperty is undefined and targetDesc is non-configurable then throw TypeError
function testcase5() {
    var target = {};
    Object.defineProperty(target, "prop", {value : 5, configurable : false});
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return undefined;
        }
    });
    try{
        var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
        $ERROR('If trapResult for getOwnProperty is undefined and targetDesc is non-configurable then should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test6: If trapResult for getOwnProperty is undefined and targetDesc is non-extensible then throw TypeError
function testcase6() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 5, configurable : true });
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return undefined;
        }
    });
    Object.preventExtensions(target);
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
        $ERROR('If trapResult for getOwnProperty is undefined and targetDesc is non-configurable then should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}
//Test7: If trapResult for getOwnProperty is undefined and targetDesc is configurable/extensible then return undefined
function testcase7() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 5, configurable: true });
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return undefined;
        }
    });
    var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
    if (desc != undefined) {
        $ERROR('If trapResult for getOwnProperty is undefined and targetDesc is configurable/extensible then should return undefined.');
    }
}

//Test8: If trapResult and targetDesc for getOwnProperty are not compatible, throw TypeError
function testcase8() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 5 });
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return { value: 23 };
        }
    });
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
        $ERROR('If trapResult and targetDesc for getOwnProperty are not compatible, throw TypeError ');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test9: If trapResult is non-configurable and targetDesc is undefined, throw TypeError
function testcase9() {
    var target = {};
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return {value : 100};
        }
    });
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
        $ERROR('If trapResult is non-configurable and targetDesc is undefined, should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}
//Test10: If trapResult is non-configurable and targetDesc is configurable, throw TypeError
function testcase10() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 23, configurable: true });
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return { value: 100 };
        }
    });
    try {
        var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
        $ERROR('If trapResult is non-configurable and targetDesc is undefined, should throw TypeError');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}

//Test11: Return trapResult if present
function testcase11() {
    var target = {};
    Object.defineProperty(target, "prop", { value: 3, writable : true });
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return { value: 23 };
        }
    });
    var desc = Object.getOwnPropertyDescriptor(proxy, "prop");
    if (desc.value != 23) {
        $ERROR('Return trapResult for getOwnPropertyDescriptor.');
    }
}

function testcase12() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        getOwnPropertyDescriptor: function (target, prop) {
            return { value: 5 };
        }
    });
    revocable.revoke();
    try{
        Object.getOwnPropertyDescriptor(revocable.proxy, "prop");
        $ERROR('setPrototypeTypeOf should throw TypeError if called on revoked proxy.');
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
