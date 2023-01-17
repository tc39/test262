// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.protoype.tojson
description: toJSON doesn't take calendarName into account.
features: [Temporal]
---*/

const tests = [
  [[], "05-02"],
  [[{ id: "custom" }], "1972-05-02[u-ca=custom]"],
  [[{ id: "iso8601" }], "05-02"],
  [[{ id: "ISO8601" }], "1972-05-02[u-ca=ISO8601]"],
  [[{ id: "\u0131so8601" }], "1972-05-02[u-ca=\u0131so8601]"], // dotless i
];
const options = {
  get calendarName() {
    TemporalHelpers.assertUnreachable("calendarName should not be accessed");
    return "";
  }
};

for (const [args, expected] of tests) {
  const monthday = new Temporal.PlainMonthDay(5, 2, ...args);
  const result = monthday.toJSON(options);
  assert.sameValue(result, expected);
}
