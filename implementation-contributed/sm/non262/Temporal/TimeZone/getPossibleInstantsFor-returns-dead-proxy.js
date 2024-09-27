// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Temporal-TimeZone-shell.js
- non262-Temporal-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Temporal
description: |
  pending
esid: pending
---*/
var g = newGlobal({newCompartment: true});

var tz = new class extends Temporal.TimeZone {
  *getPossibleInstantsFor() {
    // Return an Instant from a different compartment.
    yield new g.Temporal.Instant(0n);

    // Turn the CCW into a dead proxy wrapper.
    nukeAllCCWs();
  }
}("UTC");

var dt = new Temporal.PlainDateTime(2000, 1, 1);

// Throws a TypeError when attempting to unwrap the dead proxy.
assertThrowsInstanceOf(() => dt.toZonedDateTime(tz), TypeError);

