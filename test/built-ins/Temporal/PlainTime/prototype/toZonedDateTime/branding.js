// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.tozoneddatetime
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const toZonedDateTime = Temporal.PlainTime.prototype.toZonedDateTime;

assert.sameValue(typeof toZonedDateTime, "function");

assert.throws(TypeError, () => toZonedDateTime.call(undefined, { plainDate: "2022-05-19", timeZone: "UTC" }), "undefined");
assert.throws(TypeError, () => toZonedDateTime.call(null, { plainDate: "2022-05-19", timeZone: "UTC" }), "null");
assert.throws(TypeError, () => toZonedDateTime.call(true, { plainDate: "2022-05-19", timeZone: "UTC" }), "true");
assert.throws(TypeError, () => toZonedDateTime.call("", { plainDate: "2022-05-19", timeZone: "UTC" }), "empty string");
assert.throws(TypeError, () => toZonedDateTime.call(Symbol(), { plainDate: "2022-05-19", timeZone: "UTC" }), "symbol");
assert.throws(TypeError, () => toZonedDateTime.call(1, { plainDate: "2022-05-19", timeZone: "UTC" }), "1");
assert.throws(TypeError, () => toZonedDateTime.call({}, { plainDate: "2022-05-19", timeZone: "UTC" }), "plain object");
assert.throws(TypeError, () => toZonedDateTime.call(Temporal.PlainTime, { plainDate: "2022-05-19", timeZone: "UTC" }), "Temporal.PlainTime");
assert.throws(TypeError, () => toZonedDateTime.call(Temporal.PlainTime.prototype, { plainDate: "2022-05-19", timeZone: "UTC" }), "Temporal.PlainTime.prototype");
