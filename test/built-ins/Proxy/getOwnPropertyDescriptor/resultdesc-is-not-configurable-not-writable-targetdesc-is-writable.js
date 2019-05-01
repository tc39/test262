// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p
description: >
    Throws a TypeError exception if resultDesc is both non-configurable and
    non-writable, while targetDesc is writable.
info: |
    [[GetOwnProperty]] (P)

    ...
    17. If resultDesc.[[Configurable]] is false, then
        ...
        b. If resultDesc has a [[Writable]] field and resultDesc.[[Writable]] is
        false, then
            i. If targetDesc.[[Writable]] is true, throw a TypeError exception.
    ...
features: [Proxy]
---*/

var target = {};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(t, prop) {
    return {
      configurable: false,
      writable: false,
    }
  },
});

Object.defineProperty(target, "prop", {
  configurable: false,
  writable: true,
});

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptor(p, "prop");
});
