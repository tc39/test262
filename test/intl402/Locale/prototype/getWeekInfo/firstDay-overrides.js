// Copyright 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.getWeekInfo
description: Compliance with First Day Overrides algorithm
info: |
  WeekInfoOfLocale ( _loc_ ):
  9. Set _weekInfo_.[[FirstDay]] to FirstDayOverrides(_loc_).
features: [Intl.Locale,Intl.Locale-info]
locale: [en-AF, en-MV, en-CA, en-001, ps]
---*/

const regionAF = new Intl.Locale("en-AF").getWeekInfo().firstDay;
const regionMV = new Intl.Locale("en-MV").getWeekInfo().firstDay;
const regionCA = new Intl.Locale("en-CA").getWeekInfo().firstDay;
const fallback = new Intl.Locale("en-001").getWeekInfo().firstDay;

const localeIDTests = [
  ["en-MV-u-ca-iso8601-fw-tue-rg-afzzzz-sd-cabc", 2, "always Tuesday due to fw tag"],
  ["en-MV-u-ca-iso8601-rg-afzzzz-sd-cabc", regionAF, `AF (${regionAF}) due to rg tag`],
  ["en-MV-u-ca-iso8601-sd-cabc", 1, "always Monday due to iso8601 calendar"],
  ["en-MV-u-ca-iso8601-fw-blursday", 1, "invalid fw tag is ignored"],
  ["en-MV-u-ca-iso8601-rg-qmzzzz", 1, "invalid rg tag is ignored (QM is private-use)"],
  ["en-MV-u-sd-cabc", regionMV, `MV (${regionMV}) due to region subtag`],
  ["en-MV-u-ca-gregory", regionMV, "gregory does not define a first-day-of-week"],
  ["en-u-sd-cabc", regionCA, `CA (${regionCA}) due to sd tag`],
  ["ps", regionAF, `AF (${regionAF}) due to Add Likely Subtags algorithm`],
  ["ps-u-sd-qmqm", regionAF, "invalid sd tag is ignored (region QM is private-use)"],
  ["zxx", fallback, `001 (${fallback}) because no other week info source`],
];

for (const [id, expected, message] of localeIDTests) {
  const locale = new Intl.Locale(id);
  assert.sameValue(locale.getWeekInfo().firstDay, expected, message);
}

const optionsTests = [
  ["en-MV-u-ca-iso8601-fw-wed-rg-afzzzz-sd-cabc", { firstDayOfWeek: "tue" }, 2, "firstDayOfWeek option beats -u-fw-"],
  ["en-MV-u-ca-iso8601-rg-cazzzz-sd-cabc", { region: "AF" }, regionCA, "region option does not beat -u-rg-"],
  ["en-MV-u-sd-cabc", { region: "AF" }, regionAF, "region option beats region subtag"],
  ["en-MV", { calendar: "gregory" }, regionMV, "gregory does not define a first-day-of-week"],
  ["en-MV-u-ca-iso8601-sd-cabc", { calendar: "gregory" }, regionMV, "calendar option beats -u-ca-"],
];

for (const [id, options, expected, message] of optionsTests) {
  const locale = new Intl.Locale(id, options);
  assert.sameValue(locale.getWeekInfo().firstDay, expected, message);
}
