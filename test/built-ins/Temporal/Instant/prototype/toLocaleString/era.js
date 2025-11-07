// Copyright (C) 2025 Igalia, S.L.. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tolocalestring
description: >
    If era option and no other options are provided to toLocaleString,
    Instant should be foramtted with default options
features: [Temporal]
---*/

const instant = new Temporal.Instant(0n);

assert(instant.toLocaleString("en", { era: "narrow" }).startsWith("1"), "toLocaleString on an Instant with era option should work");
