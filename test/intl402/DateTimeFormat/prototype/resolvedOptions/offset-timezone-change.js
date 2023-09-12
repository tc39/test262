// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-createdatetimeformat
description: test offset timezone with sign sync with resolvedOptions().timeZone.
---*/
let validOffsetTimeZones = {
    '+0300': '+03',
    '+0300': '+03',
    '+13:00': '+13',
    '+2300': '+23',
    '-07:00': '-07',
    '-14': '-14',
    '-2100': '-21',
    '−2200': '-22',
    '+0103': '+01:03',
    '+15:59': '+15:59',
    '+2227': '+22:27',
    '-02:32': '-02:32',
    '-1701': '-17:01',
    '-22:23': '-22:23',
    '−22:53': '-22:53',
};
Object.keys(validOffsetTimeZones).forEach((timeZone) => {
    let df = new Intl.DateTimeFormat(undefined, {timeZone});
    let actual = df.resolvedOptions().timeZone;
    let expected = validOffsetTimeZones[timeZone];
    assert.sameValue(expected, actual);
});
