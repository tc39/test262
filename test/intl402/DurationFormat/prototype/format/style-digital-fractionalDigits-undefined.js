// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-partitiondurationformatpattern
description: >
  Test to ensure that correct number of fractional digits is displayed (i.e. however many are necessary to represent the data fully) if the fractionalDigits option is left *undefined*

info: |
  4. If durationFormat.[[FractionalDigits]] is undefined, then
    a. Perform ! CreateDataPropertyOrThrow(nfOpts, "maximumFractionDigits", 9).
    b. Perform ! CreateDataPropertyOrThrow(nfOpts, "minimumFractionDigits", 0).
  5. Else,
    a. Perform ! CreateDataPropertyOrThrow(nfOpts, "maximumFractionDigits", durationFormat.[[FractionalDigits]]).
    b. Perform ! CreateDataPropertyOrThrow(nfOpts, "minimumFractionDigits", durationFormat.[[FractionalDigits]]).
    
---*/


const durationNano = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111,
  microseconds: 222,
  nanoseconds: 333
};

const durationMicro = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111,
  microseconds: 222
};

const durationMill = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111
}

const durationNoSubsecond = {
  hours: 1,
  minutes: 22,
  seconds: 33
}

const style = "digital";
const df = new Intl.DurationFormat(undefined, {style, fractionalDigits: undefined});

assert.sameValue(df.format(durationNano), "1:22:33.111222333", `format output with nanosecond digits and fractionalDigits: undefined using ${style} style option`);
assert.sameValue(df.format(durationMicro), "1:22:33.111222", `format output with microsecond digits and fractionalDigits: undefined using ${style} style option`);
assert.sameValue(df.format(durationMilli), "1:22:33.111", `format output with millisecond digits and fractionalDigits: undefined using ${style} style option`);
assert.sameValue(df.format(durationNoSubsecond), "1:22:33", `format output with no subsecond digits and fractionalDigits: undefined using ${style} style option`);
