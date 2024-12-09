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
for (var constructor of anyTypedArrayConstructors) {
    assert.sameValue(constructor.prototype.keys.length, 0);
    assert.sameValue(constructor.prototype.keys.name, "keys");

    assert.deepEqual([...new constructor(0).keys()], []);
    assert.deepEqual([...new constructor(1).keys()], [0]);
    assert.deepEqual([...new constructor(2).keys()], [0, 1]);
    assert.deepEqual([...new constructor([15]).keys()], [0]);

    var arr = new constructor([1, 2, 3]);
    var iterator = arr.keys();
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: 1, done: false});
    assert.deepEqual(iterator.next(), {value: 2, done: false});
    assert.deepEqual(iterator.next(), {value: undefined, done: true});

    // Called from other globals.
    if (typeof createNewGlobal === "function") {
        var keys = createNewGlobal()[constructor.name].prototype.keys;
        assert.deepEqual([...keys.call(new constructor(2))], [0, 1]);
        arr = new (createNewGlobal()[constructor.name])(2);
        assert.sameValue([...constructor.prototype.keys.call(arr)].toString(), "0,1");
    }

    // Throws if `this` isn't a TypedArray.
    var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./,
                            new Proxy(new constructor(), {})];
    invalidReceivers.forEach(invalidReceiver => {
        assertThrowsInstanceOf(() => {
            constructor.prototype.keys.call(invalidReceiver);
        }, TypeError, "Assert that keys fails if this value is not a TypedArray");
    });
}

