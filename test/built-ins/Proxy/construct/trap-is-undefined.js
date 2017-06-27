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
---*/

let NewTarget = function() {};
let Target = function(a, b) {
    assert.sameValue(new.target, NewTarget);
    return {sum: a + b};
};

let handlers = [
    {},
    {construct: undefined},
    {construct: null},
];

for (let handler of handlers) {
    let P = new Proxy(Target, handler);
    let res = Reflect.construct(P, [1, 2], NewTarget);
    assert.sameValue(res.sum, 3);
}
