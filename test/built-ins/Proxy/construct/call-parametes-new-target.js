// Copyright (C) 2017 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 9.5.14
esid: sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget
description: >
    trap is called with handler object as its context, and parameters are:
    target, an array list with the called arguments and the NewTarget
info: >
    [[Construct]] (argumentsList, newTarget)

    9. Let newObj be Call(trap, handler, «target, argArray, newTarget»).
---*/

let Target = function() {};
let NewTarget = function() {};

let handler = {
    construct: function(_Target, args, _NewTarget) {
        assert.sameValue(this, handler, "trap context is the handler object");
        assert.sameValue(_Target, Target, "first parameter is the target object");
        assert.sameValue(args.length, 2, "arguments list contains all construct arguments");

        let [a, b] = args;
        assert.sameValue(a, 1, "arguments list has first construct argument");
        assert.sameValue(b, 2, "arguments list has second construct argument");
        assert.sameValue(_NewTarget, NewTarget, "newTarget is sent as the third parameter");

        return {sum: a + b};
    },
};

let P = new Proxy(Target, handler);
let res = Reflect.construct(P, [1, 2], NewTarget);
assert.sameValue(res.sum, 3);
