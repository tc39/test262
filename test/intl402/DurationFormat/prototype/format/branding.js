// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: Verifies the branding check for the "format" function of the DurationFormat prototype object.
features: [Intl.DurationFormat]
---*/

const format = Intl.DurationFormat.prototype.format;

assert.sameValue(typeof format, "function");

assert.throws(TypeError, () => format.call(undefined, { years : 2 }), "undefined");
assert.throws(TypeError, () => format.call(null), "null");
assert.throws(TypeError, () => format.call(true), "true");
assert.throws(TypeError, () => format.call(""), "empty string");
assert.throws(TypeError, () => format.call(Symbol()), "symbol");
assert.throws(TypeError, () => format.call(1), "1");
assert.throws(TypeError, () => format.call({}), "plain object");
assert.throws(TypeError, () => format.call(Intl.DurationFormat), "Intl.DurationFormat");
assert.throws(TypeError, () => format.call(Intl.DurationFormat.prototype), "Intl.DurationFormat.prototype");
