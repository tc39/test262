// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, sm/non262-TypedArray-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// Tests for TypedArray#forEach
for (var constructor of anyTypedArrayConstructors) {
    assert.sameValue(constructor.prototype.forEach.length, 1);

    var arr = new constructor([1, 2, 3, 4, 5]);
    // Tests for `thisArg` argument.
    function assertThisArg(thisArg, thisValue) {
        // In sloppy mode, `this` could be global object or a wrapper of `thisArg`.
        arr.forEach(function() {
            assert.deepEqual(this, thisValue);
            return false;
        }, thisArg);

        // In strict mode, `this` strictly equals `thisArg`.
        arr.forEach(function() {
            "use strict";
            assert.deepEqual(this, thisArg);
            return false;
        }, thisArg);

        // Passing `thisArg` has no effect if callback is an arrow function.
        var self = this;
        arr.forEach(() => {
            assert.sameValue(this, self);
            return false;
        }, thisArg);
    }
    assertThisArg([1, 2, 3], [1, 2, 3]);
    assertThisArg(Object, Object);
    assertThisArg(1, Object(1));
    assertThisArg("1", Object("1"));
    assertThisArg(false, Object(false));
    assertThisArg(undefined, this);
    assertThisArg(null, this);

    // Throw an exception in the callback.
    var sum = 0;
    var count = 0;
    var thrown = false;
    try {
        assert.sameValue(arr.forEach((v) => {
            count++;
            sum += v;
            if (v === 3) {
                throw "forEach";
            }
        }), undefined)
    } catch(e) {
        assert.sameValue(e, "forEach");
        thrown = true;
    }
    assert.sameValue(thrown, true);
    assert.sameValue(sum, 6);
    assert.sameValue(count, 3);

    // There is no callback or callback is not a function.
    assertThrowsInstanceOf(() => {
        arr.forEach();
    }, TypeError);
    var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
    invalidCallbacks.forEach(callback => {
        assertThrowsInstanceOf(() => {
            arr.forEach(callback);
        }, TypeError);
    })

    // Callback is a generator.
    arr.forEach(function*(){
        throw "This line will not be executed";
    });

    // Called from other globals.
    if (typeof createNewGlobal === "function") {
        var forEach = createNewGlobal()[constructor.name].prototype.forEach;
        var sum = 0;
        forEach.call(new constructor([1, 2, 3]), v => {
            sum += v;
        });
        assert.sameValue(sum, 6);
    }

    // Throws if `this` isn't a TypedArray.
    var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./,
                            new Proxy(new constructor(), {})];
    invalidReceivers.forEach(invalidReceiver => {
        assertThrowsInstanceOf(() => {
            constructor.prototype.forEach.call(invalidReceiver, () => true);
        }, TypeError, "Assert that some fails if this value is not a TypedArray");
    });
}

