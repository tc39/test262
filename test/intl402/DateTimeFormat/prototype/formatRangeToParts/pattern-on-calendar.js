// Copyright 2019 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializedatetimeformat
description: Checks the DateTimeFormat choose different patterns based
    on calendar.
locale: [en]
---*/

let calendars = [
  "buddhist",
  "chinese",
  "coptic",
  "dangi",
  "ethiopic",
  "ethioaa",
  "gregory",
  "hebrew",
  "indian",
  "islamic",
  "islamic-civil",
  "islamic-rgsa",
  "islamic-tbla",
  "islamic-umalqura",
  "japanese",
  "persian",
  "roc"
];
let date1 = new Date(2017, 3, 12);
let date2 = new Date();

// serialize parts to a string by considering only the type and literal.
function serializeTypesAndLiteral(parts) {
  var types = new Array();
  parts.forEach(function(part) {
    if (part.type == "literal") {
      types.push(part.type + "(" + part.value + ")");
    } else {
      types.push(part.type);
    }
  });
  return types.join(":");
}

let df = new Intl.DateTimeFormat("en");
let base  = serializeTypesAndLiteral(df.formatRangeToParts(date1, date2));
let diff = 0;

// Iterate through all different known calendars.
// Expect at least one of them get get different pattern.
calendars.forEach(function(calendar) {
  let cdf =  new Intl.DateTimeFormat("en-u-ca-" + calendar);
  if (base != serializeTypesAndLiteral(cdf.formatRangeToParts(date1, date2))) {
    diff++;
  }
});

// Expect at least some calendar use different pattern.
assert.sameValue(diff > 0, true);
