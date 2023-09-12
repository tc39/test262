// Copyright 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-createdatetimeformat
description: >
  Test offset timezone generate the correct hour and minute
  base on the offset timezone value.
---*/
let date = new Date('1995-12-17T03:24:56Z');
let tests = {
    '+0301': {hour: "6", minute: "25"},
    '+1412': {hour: "5", minute: "36"},
    '+02':   {hour: "5", minute: "24"},
    '+13:49': {hour: "5", minute: "13"},
    '-07:56': {hour: "7", minute: "28"},
    '-12': {hour: "3", minute: "24"},
    '−0914': {hour: "6", minute: "10"},
    '−10:03': {hour: "5", minute: "21"},
    '−0509': {hour: "10", minute: "15"},
};
Object.keys(tests).forEach((timeZone) => {
    let df = new Intl.DateTimeFormat("en",
        {timeZone, timeStyle: "short"});
    let res = df.formatToParts(date);
    let hour = res.filter((t) => t.type=="hour")[0].value
    let minute = res.filter((t) => t.type=="minute")[0].value
    let expected = tests[timeZone];
    assert.sameValue(expected.hour, hour, "hour in TimeZone:" + timeZone);
    assert.sameValue(expected.minute, minute, "minute in TimeZone:" + timeZone);
});
