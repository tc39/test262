// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.formatToParts
description: Verifies the branding check for the "formatToParts" function of the DurationFormat prototype object.
features: [Intl.DurationFormat]
---*/

const formatToParts = Intl.DurationFormat.prototype.formatToParts;

assert.sameValue(typeof formatToParts, "function");

assert.throws(TypeError, () => formatToParts.call(undefined, { years : 2 }), "undefined");
assert.throws(TypeError, () => formatToParts.call(null), "null");
assert.throws(TypeError, () => formatToParts.call(true), "true");
assert.throws(TypeError, () => formatToParts.call(""), "empty string");
assert.throws(TypeError, () => formatToParts.call(Symbol()), "symbol");
assert.throws(TypeError, () => formatToParts.call(1), "1");
assert.throws(TypeError, () => formatToParts.call({}), "plain object");
assert.throws(TypeError, () => formatToParts.call(Intl.DurationFormat), "Intl.DurationFormat");
assert.throws(TypeError, () => formatToParts.call(Intl.DurationFormat.prototype), "Intl.DurationFormat.prototype");
