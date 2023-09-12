// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-createdatetimeformat
description: >
  Test offset timezone format the same value as the equivalent
  Etc/GMT offset timezone.
---*/
let offsetTimeZones = {
    '+0300': 'Etc/GMT-3',
    '+1400': 'Etc/GMT-14',
    '+02': 'Etc/GMT-2',
    '+13:00': 'Etc/GMT-13',
    '-07:00': 'Etc/GMT+7',
    '-12': 'Etc/GMT+12',
    '−0900': 'Etc/GMT+9',
    '−10:00': 'Etc/GMT+10',
    '−0500': 'Etc/GMT+5',
};
let date = new Date('1995-12-17T03:24:56Z');
Object.keys(offsetTimeZones).forEach((timeZone) => {
    let offsetDf = new Intl.DateTimeFormat("en",
        {timeZone, dateStyle: "short", timeStyle: "short"});
    let gmtDf = new Intl.DateTimeFormat("en",
        {timeZone: offsetTimeZones[timeZone], dateStyle: "short", timeStyle: "short"});
    assert.sameValue(offsetDf.format(date), gmtDf.format(date));
});
