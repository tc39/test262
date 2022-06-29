// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: >
  Throws a TypeError if Intl.DurationFormat is called as a function.
info: |
    Intl.DurationFormat ([ locales [ , options ]])
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Intl.DurationFormat]
---*/

assert.throws(TypeError, function() {
  Intl.DurationFormat();
});

assert.throws(TypeError, function() {
  Intl.DurationFormat('en');
});

assert.throws(TypeError, function() {
  Intl.DurationFormat(['en']);
});
