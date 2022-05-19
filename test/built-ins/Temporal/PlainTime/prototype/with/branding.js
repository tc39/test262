// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.with
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const with_ = Temporal.PlainTime.prototype.with;

assert.sameValue(typeof with_, "function");

assert.throws(TypeError, () => with_.call(undefined, { hour: 7 }), "undefined");
assert.throws(TypeError, () => with_.call(null, { hour: 7 }), "null");
assert.throws(TypeError, () => with_.call(true, { hour: 7 }), "true");
assert.throws(TypeError, () => with_.call("", { hour: 7 }), "empty string");
assert.throws(TypeError, () => with_.call(Symbol(), { hour: 7 }), "symbol");
assert.throws(TypeError, () => with_.call(1, { hour: 7 }), "1");
assert.throws(TypeError, () => with_.call({}, { hour: 7 }), "plain object");
assert.throws(TypeError, () => with_.call(Temporal.PlainTime, { hour: 7 }), "Temporal.PlainTime");
assert.throws(TypeError, () => with_.call(Temporal.PlainTime.prototype, { hour: 7 }), "Temporal.PlainTime.prototype");
