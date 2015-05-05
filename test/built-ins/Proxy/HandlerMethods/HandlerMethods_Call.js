// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author : Kunal Pathak
description: Testing Object.Call for proxy



---*/

//Test1: If Call is not present on handler, we call target.Call
function testcase1() {
    var target = function () { return 5; };
    var proxy = new Proxy(target, {});
    var ret1 = proxy();
    var ret2 = proxy.apply(null);
    var ret3 = proxy.call(null);
    if (ret1 != ret2 || ret1 != 5) {
        $ERROR('If Call is not present on handler, should call target.Call');
    }
    if (ret1 != ret3) {
        $ERROR('If Call is not present on handler, should call target.Call');
    }
}

//Test2: If Call is present on handler, we call handler.call with right arguments
function testcase2() {
    var expectedArgList = ['1', 5, "asD"];
    var isTrapCalled = false;
    var target = function (a, b, c) { return 5; }
    var proxy = new Proxy(target, {
        apply: function (tar, thisArg, argumentsList) {
            isTrapCalled = true;
            if (tar != target) {
                $ERROR('Call handler called on wrong target.');
            }
            if (argumentsList.length != expectedArgList.length) {
                $ERROR('Call handler called with wrong argument list.');
            }
            for (var i = 0; i < argumentsList.length; i++) {
                if (argumentsList[i] != expectedArgList[i]) {
                    $ERROR('Call handler called with wrong arguments.');
                }
            }
            return 23;
        }
    });
    var ret = proxy('1', 5, "asD");
    if (ret != 23) {
        $ERROR('apply handler returned wrong result.');
    }

    if (!isTrapCalled) {
        $ERROR('Call : Failed to call trap.');
    }

}

function testcase3() {
    var target = {};
    var revocable = Proxy.revocable(target, {
        apply: function (tar, thisArg, argumentsList) {
            return 5;
        }
    });
    revocable.revoke();
    try{
        revocable.proxy('1', 5, "asD");
        $ERROR('Call should throw TypeError if called on revoked proxy.');
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR('incorrect instanceof Error');
        }
    }
}
testcase1();
testcase2();
testcase3();
