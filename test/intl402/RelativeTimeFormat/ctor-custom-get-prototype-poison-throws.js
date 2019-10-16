// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat
description: >
  Return abrupt from Get Prototype from a custom NewTarget
info: |
  OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
  ...

  GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  3. Let proto be ? Get(constructor, "prototype").
  4. If Type(proto) is not Object, then
    a. Let realm be ? GetFunctionRealm(constructor).
    b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
  5. Return proto.
features: [Intl.RelativeTimeFormat, Reflect, Proxy]
---*/

var custom = new Proxy(new Function(), {
  get(target, key) {
    if (key === 'prototype') {
      throw new Test262Error();
    }

    return target[key];
  }
});

assert.throws(Test262Error, () => {
  Reflect.construct(Intl.RelativeTimeFormat, [], custom);
});
