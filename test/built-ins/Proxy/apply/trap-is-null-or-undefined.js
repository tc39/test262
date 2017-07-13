// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.13
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
    If trap is null or undefined, propagate the call to the target object.
info: >
    [[Call]] (thisArgument, argumentsList)

    7. If trap is undefined, then Return Call(target, thisArgument,
    argumentsList).
---*/

function target(a, b) {
    assert.sameValue(this, ctx);
    return a + b;
}

var ctx = {};
var p = new Proxy(target, {apply: null});
var res = p.call(ctx, 1, 2);
assert.sameValue(res, 3, "`apply` trap is `null`");

p = new Proxy(target, {apply: undefined});
res = p.call(ctx, 3, 4);
assert.sameValue(res, 7, "`apply` trap is `undefined`");
