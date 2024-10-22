// Copyright 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.RelativeTimeFormat.prototype.format
description: Checks that numberingSystem option used correctly.
info: |
    17.5.2 PartitionRelativeTimePattern ( relativeTimeFormat, value, unit )

    11. Let fv be PartitionNumberPattern(relativeTimeFormat.[[NumberFormat]], ℝ(value)).

locale: [en-US]
---*/

const localesAndResults = [
  ["en-US", "in 1,234,567,890 sec."],
  ["en-US-u-nu-arab", "in ١٬٢٣٤٬٥٦٧٬٨٩٠ sec."],
  ["en-US-u-nu-deva", "in १,२३४,५६७,८९० sec."],
  ["en-US-u-nu-hanidec", "in 一,二三四,五六七,八九〇 sec."],
];
const seconds = 1234567890;

for (const [locale, expected] of localesAndResults){
  const formatted = new Intl.RelativeTimeFormat(locale, {style: "short"}).format(seconds, "seconds");
  assert.sameValue(formatted, expected, `locale: ${locale}`);
}
