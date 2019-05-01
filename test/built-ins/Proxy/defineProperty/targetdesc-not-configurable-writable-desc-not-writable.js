// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc
description: >
    Throw a TypeError exception if trap result is true, targetDesc is not configurable
    and writable, while Desc is not writable.
info: |
    [[DefineOwnProperty]] (P, Desc)

    ...
    16. Else targetDesc is not undefined,
        ...
        c. If IsDataDescriptor(targetDesc) is true, targetDesc.[[Configurable]] is
        false, and targetDesc.[[Writable]] is true, then
            i. If Desc has a [[Writable]] field and Desc.[[Writable]] is
            false, throw a TypeError exception.
    ...
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  defineProperty: function(t, prop, desc) {
    return true;
  },
});

Object.defineProperty(target, "prop", {
  configurable: false,
  writable: true,
});

assert.throws(TypeError, function() {
  Object.defineProperty(p, "prop", {
    writable: false,
  });
});
