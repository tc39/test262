// Copyright (C) 2016 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.8
description: >
    [[Get]] (P, Receiver)

    7. If trap is undefined, then
        a. Return ? target.[[Get]](P, Receiver).
---*/

var target = {
    get attr() {
        return this;
    }
};

var p = new Proxy(target, { get: undefined });
assert.sameValue(p.attr, p);

var pHerit = new Proxy(Object.create(target), { get: null });
assert.sameValue(pHerit.attr, pHerit);

var pParent = Object.create(new Proxy(target, {}));
assert.sameValue(pParent.attr, pParent);
