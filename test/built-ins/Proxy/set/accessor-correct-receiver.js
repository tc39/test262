// Copyright (C) 2016 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.9
description: >
    [[Set]] (P, V, Receiver)

    7. If trap is undefined, then
        a. Return ? target.[[Set]](P, V, Receiver).
---*/

var context;
var target = {
    set attr(val) {
        context = this;
    }
};

var p = new Proxy(target, { set: undefined });
p.attr = 1;
assert.sameValue(context, p);

var pHerit = new Proxy(Object.create(target), { set: null });
pHerit.attr = 2;
assert.sameValue(context, pHerit);

var pParent = Object.create(new Proxy(target, {}));
pParent.attr = 3;
assert.sameValue(context, pParent);
