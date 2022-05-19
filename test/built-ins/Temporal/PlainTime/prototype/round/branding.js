// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.round
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const round = Temporal.PlainTime.prototype.round;

assert.sameValue(typeof round, "function");

assert.throws(TypeError, () => round.call(undefined, "hour"), "undefined");
assert.throws(TypeError, () => round.call(null, "hour"), "null");
assert.throws(TypeError, () => round.call(true, "hour"), "true");
assert.throws(TypeError, () => round.call("", "hour"), "empty string");
assert.throws(TypeError, () => round.call(Symbol(), "hour"), "symbol");
assert.throws(TypeError, () => round.call(1, "hour"), "1");
assert.throws(TypeError, () => round.call({}, "hour"), "plain object");
assert.throws(TypeError, () => round.call(Temporal.PlainTime, "hour"), "Temporal.PlainTime");
assert.throws(TypeError, () => round.call(Temporal.PlainTime.prototype, "hour"), "Temporal.PlainTime.prototype");
