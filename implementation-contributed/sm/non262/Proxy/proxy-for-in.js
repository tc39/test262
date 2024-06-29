// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Proxy-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
"use strict";

let steps = [];

const object = {
    __proto__: {
        "xyz": 42
    }
};
const proxy = new Proxy(object, {
    ownKeys(target) {
        steps.push("ownKeys")
        return ["a", "b"];
    },

    getOwnPropertyDescriptor(target, property) {
        steps.push("getOwn-" + property);
        return {
            value: undefined,
            configurable: true,
            writable: true,
            enumerable: (property === "a")
        };
    }
});

let iterated = [];
for (let x in proxy)
    iterated.push(x);

assert.sameValue(iterated.toString(), "a,xyz");
assert.sameValue(steps.toString(), "ownKeys,getOwn-a,getOwn-b");

