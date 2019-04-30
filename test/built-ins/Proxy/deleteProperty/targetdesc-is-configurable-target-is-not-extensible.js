// Copyright (C) 2019 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.10
description: >
    Throw a TypeError exception if trap result is true, targetDesc is configurable,
    and target is not extensible.
info: |
    [[Delete]] (P)

    ...
    13. Let extensibleTarget be ? IsExtensible(target).
    14. If extensibleTarget is false, throw a TypeError exception.
    ...
features: [Proxy]
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
  delete p.prop;
});
