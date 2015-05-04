// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing inheritence Proxies
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {
        var child;
        var obj = objectStore[i];
        var proxy = new Proxy(obj, {
            has: function (tgt, name) {
                return name === 'foo';
            },
            get: function (tgt, name, rcvr) {
                if (rcvr !== child) {
                    $ERROR('get: receiver is child');
                }
                return name;
            },
            set: function (tgt, name, val, rcvr) {
                if (rcvr !== child) {
                    $ERROR('set: receiver is child');
                }
                tgt[name] = val;

                return true;
            },
            enumerate: function (tgt) {
                return ['foo'][Symbol.iterator]();
            }
        });
        child = Object.create(proxy);
        var result = 'foo' in child;
        if (!result) {
            $ERROR('foo should be present');
        }

        result = 'bar' in child;
        if (result) {
            $ERROR('bar should not be present');
        }

        result = child['foo'];
        if (result!=='foo') {
            $ERROR('incorrect value for get');
        }

        child['foo'] = 100;
        if (obj['foo'] !== 100) {
            $ERROR('foo should be 100');
        }

        var props = [];
        for(var p in child) {props.push(p); }
        //if (props.indexOf('foo')) {
        //    $ERROR('foo should be enumerable');
        //}
    }
    return true;

}
runTestCase(testcase);
