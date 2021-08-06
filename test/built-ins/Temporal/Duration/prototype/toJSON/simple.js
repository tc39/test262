// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.duration.prototype.tojson
description: Temporal.Duration.prototype.toJSON will return correct iso8601 string for the given duration.
info: |
  1. Let duration be the this value.
  2. Perform ? RequireInternalSlot(duration, [[InitializedTemporalDuration]]).
  3. Return ! TemporalDurationToString(duration.[[Years]], duration.[[Months]], duration.[[Weeks]], duration.[[Days]], duration.[[Hours]], duration.[[Minutes]], duration.[[Seconds]], duration.[[Milliseconds]], duration.[[Microseconds]], duration.[[Nanoseconds]], "auto").
features: [Temporal]
---*/
let d = new Temporal.Duration();
assert.sameValue(d.toJSON(), "PT0S");

d = new Temporal.Duration(1);
assert.sameValue(d.toJSON(), "P1Y");
d = new Temporal.Duration(-1);
assert.sameValue(d.toJSON(), "-P1Y");
d = new Temporal.Duration(1234567890);
assert.sameValue(d.toJSON(), "P1234567890Y");
d = new Temporal.Duration(-1234567890);
assert.sameValue(d.toJSON(), "-P1234567890Y");

d = new Temporal.Duration(1, 2);
assert.sameValue(d.toJSON(), "P1Y2M");
d = new Temporal.Duration(-1, -2);
assert.sameValue(d.toJSON(), "-P1Y2M");
d = new Temporal.Duration(0, 2);
assert.sameValue(d.toJSON(), "P2M");
d = new Temporal.Duration(0,-2);
assert.sameValue(d.toJSON(), "-P2M");
d = new Temporal.Duration(0, 1234567890);
assert.sameValue(d.toJSON(), "P1234567890M");
d = new Temporal.Duration(0,-1234567890);
assert.sameValue(d.toJSON(), "-P1234567890M");

d = new Temporal.Duration(1, 2, 3);
assert.sameValue(d.toJSON(), "P1Y2M3W");
d = new Temporal.Duration(-1, -2, -3);
assert.sameValue(d.toJSON(), "-P1Y2M3W");
d = new Temporal.Duration(0, 0, 3);
assert.sameValue(d.toJSON(), "P3W");
d = new Temporal.Duration(0, 0, -3);
assert.sameValue(d.toJSON(), "-P3W");
d = new Temporal.Duration(1, 0, 3);
assert.sameValue(d.toJSON(), "P1Y3W");
d = new Temporal.Duration(-1, 0, -3);
assert.sameValue(d.toJSON(), "-P1Y3W");
d = new Temporal.Duration(0, 2, 3);
assert.sameValue(d.toJSON(), "P2M3W");
d = new Temporal.Duration(0, -2, -3);
assert.sameValue(d.toJSON(), "-P2M3W");
d = new Temporal.Duration(0, 0, 1234567890);
assert.sameValue(d.toJSON(), "P1234567890W");
d = new Temporal.Duration(0, 0, -1234567890);
assert.sameValue(d.toJSON(), "-P1234567890W");

d = new Temporal.Duration(1, 2, 3, 4);
assert.sameValue(d.toJSON(), "P1Y2M3W4D");
d = new Temporal.Duration(-1, -2, -3, -4);
assert.sameValue(d.toJSON(), "-P1Y2M3W4D");
d = new Temporal.Duration(0, 0, 0, 1234567890);
assert.sameValue(d.toJSON(), "P1234567890D");
d = new Temporal.Duration(0, 0, 0, -1234567890);
assert.sameValue(d.toJSON(), "-P1234567890D");
d = new Temporal.Duration(0, 0, 0, 4);
assert.sameValue(d.toJSON(), "P4D");
d = new Temporal.Duration(0, 0, 0, -4);
assert.sameValue(d.toJSON(), "-P4D");
d = new Temporal.Duration(1, 0, 0, 4);
assert.sameValue(d.toJSON(), "P1Y4D");
d = new Temporal.Duration(-1, 0, 0, -4);
assert.sameValue(d.toJSON(), "-P1Y4D");
d = new Temporal.Duration(0, 2, 0, 4);
assert.sameValue(d.toJSON(), "P2M4D");
d = new Temporal.Duration(0, -2, 0, -4);
assert.sameValue(d.toJSON(), "-P2M4D");
d = new Temporal.Duration(0, 0, 3, 4);
assert.sameValue(d.toJSON(), "P3W4D");
d = new Temporal.Duration(0, 0, -3, -4);
assert.sameValue(d.toJSON(), "-P3W4D");

d = new Temporal.Duration(0, 0, 0, 0, 5);
assert.sameValue(d.toJSON(), "PT5H");
d = new Temporal.Duration(0, 0, 0, 0, -5);
assert.sameValue(d.toJSON(), "-PT5H");
d = new Temporal.Duration(1, 0, 0, 0, 5);
assert.sameValue(d.toJSON(), "P1YT5H");
d = new Temporal.Duration(-1, 0, 0, 0, -5);
assert.sameValue(d.toJSON(), "-P1YT5H");
d = new Temporal.Duration(0, 2, 0, 0, 5);
assert.sameValue(d.toJSON(), "P2MT5H");
d = new Temporal.Duration(0, -2, 0, 0, -5);
assert.sameValue(d.toJSON(), "-P2MT5H");

d = new Temporal.Duration(0, 0, 0, 0, 0, 6);
assert.sameValue(d.toJSON(), "PT6M");
d = new Temporal.Duration(0, 0, 0, 0, 0, -6);
assert.sameValue(d.toJSON(), "-PT6M");
d = new Temporal.Duration(0, 0, 0, 0, 5, 6);
assert.sameValue(d.toJSON(), "PT5H6M");
d = new Temporal.Duration(0, 0, 0, 0, -5, -6);
assert.sameValue(d.toJSON(), "-PT5H6M");
d = new Temporal.Duration(0, 0, 3, 0, 0, 6);
assert.sameValue(d.toJSON(), "P3WT6M");
d = new Temporal.Duration(0, 0, -3, 0, 0, -6);
assert.sameValue(d.toJSON(), "-P3WT6M");
d = new Temporal.Duration(0, 0, 0, 4, 0, 6);
assert.sameValue(d.toJSON(), "P4DT6M");
d = new Temporal.Duration(0, 0, 0, -4, 0, -6);
assert.sameValue(d.toJSON(), "-P4DT6M");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 7);
assert.sameValue(d.toJSON(), "PT7S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, -7);
assert.sameValue(d.toJSON(), "-PT7S");
d = new Temporal.Duration(0, 0, 0, 0, 5, 0, 7);
assert.sameValue(d.toJSON(), "PT5H7S");
d = new Temporal.Duration(0, 0, 0, 0, -5, 0, -7);
assert.sameValue(d.toJSON(), "-PT5H7S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 6, 7);
assert.sameValue(d.toJSON(), "PT6M7S");
d = new Temporal.Duration(0, 0, 0, 0, 0, -6, -7);
assert.sameValue(d.toJSON(), "-PT6M7S");
d = new Temporal.Duration(0, 0, 0, 0, 5, 6, 7);
assert.sameValue(d.toJSON(), "PT5H6M7S");
d = new Temporal.Duration(0, 0, 0, 0, -5, -6, -7);
assert.sameValue(d.toJSON(), "-PT5H6M7S");
d = new Temporal.Duration(1, 0, 0, 0, 5, 6, 7);
assert.sameValue(d.toJSON(), "P1YT5H6M7S");
d = new Temporal.Duration(-1, 0, 0, 0, -5, -6, -7);
assert.sameValue(d.toJSON(), "-P1YT5H6M7S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 8);
assert.sameValue(d.toJSON(), "PT0.008S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -8);
assert.sameValue(d.toJSON(), "-PT0.008S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 80);
assert.sameValue(d.toJSON(), "PT0.08S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -80);
assert.sameValue(d.toJSON(), "-PT0.08S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 87);
assert.sameValue(d.toJSON(), "PT0.087S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -87);
assert.sameValue(d.toJSON(), "-PT0.087S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 876);
assert.sameValue(d.toJSON(), "PT0.876S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -876);
assert.sameValue(d.toJSON(), "-PT0.876S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 876543);
assert.sameValue(d.toJSON(), "PT876.543S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, -876543);
assert.sameValue(d.toJSON(), "-PT876.543S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 9);
assert.sameValue(d.toJSON(), "PT0.000009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -9);
assert.sameValue(d.toJSON(), "-PT0.000009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 90);
assert.sameValue(d.toJSON(), "PT0.00009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -90);
assert.sameValue(d.toJSON(), "-PT0.00009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 98);
assert.sameValue(d.toJSON(), "PT0.000098S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -98);
assert.sameValue(d.toJSON(), "-PT0.000098S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 900);
assert.sameValue(d.toJSON(), "PT0.0009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -900);
assert.sameValue(d.toJSON(), "-PT0.0009S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 987);
assert.sameValue(d.toJSON(), "PT0.000987S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -987);
assert.sameValue(d.toJSON(), "-PT0.000987S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 987654);
assert.sameValue(d.toJSON(), "PT0.987654S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -987654);
assert.sameValue(d.toJSON(), "-PT0.987654S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 987654321);
assert.sameValue(d.toJSON(), "PT987.654321S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, -987654321);
assert.sameValue(d.toJSON(), "-PT987.654321S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
assert.sameValue(d.toJSON(), "PT0.000000001S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -1);
assert.sameValue(d.toJSON(), "-PT0.000000001S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 10);
assert.sameValue(d.toJSON(), "PT0.00000001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -10);
assert.sameValue(d.toJSON(), "-PT0.00000001S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 12);
assert.sameValue(d.toJSON(), "PT0.000000012S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -12);
assert.sameValue(d.toJSON(), "-PT0.000000012S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 100);
assert.sameValue(d.toJSON(), "PT0.0000001S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -100);
assert.sameValue(d.toJSON(), "-PT0.0000001S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 123);
assert.sameValue(d.toJSON(), "PT0.000000123S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -123);
assert.sameValue(d.toJSON(), "-PT0.000000123S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 123456);
assert.sameValue(d.toJSON(), "PT0.000123456S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -123456);
assert.sameValue(d.toJSON(), "-PT0.000123456S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 123456789);
assert.sameValue(d.toJSON(), "PT0.123456789S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -123456789);
assert.sameValue(d.toJSON(), "-PT0.123456789S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 1234567891);
assert.sameValue(d.toJSON(), "PT1.234567891S");
d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, -1234567891);
assert.sameValue(d.toJSON(), "-PT1.234567891S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 4, 3, 2, 1);
assert.sameValue(d.toJSON(), "PT4.003002001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, -4, -3, -2, -1);
assert.sameValue(d.toJSON(), "-PT4.003002001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 4, 3, 2, 90001);
assert.sameValue(d.toJSON(), "PT4.003092001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, -4, -3, -2, -90001);
assert.sameValue(d.toJSON(), "-PT4.003092001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 4, 3, 2, 90080001);
assert.sameValue(d.toJSON(), "PT4.093082001S");

d = new Temporal.Duration(0, 0, 0, 0, 0, 0, -4, -3, -2, -90080001);
assert.sameValue(d.toJSON(), "-PT4.093082001S");

d = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 1);
assert.sameValue(d.toJSON(), "P1Y2M3W4DT5H6M7.008009001S");

d = new Temporal.Duration(-1, -2, -3, -4, -5, -6, -7, -8, -9, -1);
assert.sameValue(d.toJSON(), "-P1Y2M3W4DT5H6M7.008009001S");

d = new Temporal.Duration(
    1234, 2345, 3456, 4567, 5678, 6789, 7890, 890, 901, 123);
assert.sameValue(
    d.toJSON(), "P1234Y2345M3456W4567DT5678H6789M7890.890901123S");

d = new Temporal.Duration(
    -1234, -2345, -3456, -4567, -5678, -6789, -7890, -890, -901, -123);
assert.sameValue(
    d.toJSON(), "-P1234Y2345M3456W4567DT5678H6789M7890.890901123S");
