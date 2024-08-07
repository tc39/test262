// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
const {
    Second, FractionalSecond, Literal
} = DateTimeFormatParts

const tests = [
  {
      date: new Date("2019-01-01T00:00:00.123"),
      digits: {
          1: [Second("0"), Literal("."), FractionalSecond("1")],
          2: [Second("0"), Literal("."), FractionalSecond("12")],
          3: [Second("0"), Literal("."), FractionalSecond("123")],
      }
  },
  {
      date: new Date("2019-01-01T00:00:00.023"),
      digits: {
          1: [Second("0"), Literal("."), FractionalSecond("0")],
          2: [Second("0"), Literal("."), FractionalSecond("02")],
          3: [Second("0"), Literal("."), FractionalSecond("023")],
      }
  },
  {
      date: new Date("2019-01-01T00:00:00.003"),
      digits: {
          1: [Second("0"), Literal("."), FractionalSecond("0")],
          2: [Second("0"), Literal("."), FractionalSecond("00")],
          3: [Second("0"), Literal("."), FractionalSecond("003")],
      }
  },
];

for (let {date, digits} of tests) {
    for (let [fractionalSecondDigits, parts] of Object.entries(digits)) {
        let dtf = new Intl.DateTimeFormat("en", {second: "numeric", fractionalSecondDigits});

        assertParts(dtf, date, parts);
    }
}

