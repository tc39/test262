// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.14
esid: sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget
description: >
    If trap is null or undefined, propagate the construct to the target object.
info: >
    [[Construct]] (argumentsList, newTarget)

    7. If trap is undefined, then
        b. Return Construct(target, argumentsList, newTarget).
features: [Reflect.construct]
---*/

function NewTarget() {}
function Target(a, b) {
    assert.sameValue(new.target, NewTarget);
    return {sum: a + b};
}

var P = new Proxy(Target, {construct: undefined});
var obj = Reflect.construct(P, [3, 4], NewTarget);
assert.sameValue(obj.sum, 7, "`construct` trap is `undefined`");

P = new Proxy(Target, {construct: null});
obj = Reflect.construct(P, [5, 6], NewTarget);
assert.sameValue(obj.sum, 11, "`construct` trap is `null`");
