// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
    [[Call]] (thisArgument, argumentsList)

    1. Let handler be O.[[ProxyHandler]].
    2. If handler is null, throw a TypeError exception.
features: [cross-realm, Proxy]
---*/

var OProxy = $262.createRealm().global.Proxy;
var p = OProxy.revocable(function() {}, {});

p.revoke();

assert.throws(TypeError, function() {
  p.proxy();
});
