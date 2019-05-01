// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-delete-p
description: >
    Throw a TypeError exception if trap result is true, targetDesc is configurable,
    and target is not extensible.
info: |
    [[Delete]] (P)

    ...
    13. Let extensibleTarget be ? IsExtensible(target).
    14. If extensibleTarget is false, throw a TypeError exception.
    ...
features: [Proxy, Reflect]
---*/

var target = {
  prop: 1,
};

var p = new Proxy(target, {
  deleteProperty: function(t, prop) {
    return true;
  },
});

Object.preventExtensions(target);

assert.throws(TypeError, function() {
  Reflect.deleteProperty(p, "prop");
});
