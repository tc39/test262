// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-datetime-format-functions
description: Intl.DateTimeFormat.prototype.formatRange ignores timezone when isPlain is true.
features: [Temporal]
---*/

// Non existent date in the Pacific/Apia timezone.
const datetime_apia = '2011-12-30T12:00:00';
// Non existent time in the America/Los_Angeles timezone.
const datetime_los_angeles = '2026-03-08T02:00:00';

const pdt_apia = Temporal.PlainDateTime.from(datetime_apia);
const pdt_los_angeles = Temporal.PlainDateTime.from(datetime_los_angeles);

const pd_apia = Temporal.PlainDate.from(datetime_apia);
const pd_los_angeles = Temporal.PlainDate.from(datetime_los_angeles);

const pt_apia = Temporal.PlainTime.from(datetime_apia);
const pt_los_angeles = Temporal.PlainTime.from(datetime_los_angeles);

const dtf_apia = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Pacific/Apia' });
const dtf_los_angeles = new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Los_Angeles' });

const usDateRangeSeparator = new Intl.DateTimeFormat("en-US", { dateStyle: "short" })
  .formatRangeToParts(1 * 86400 * 1000, 366 * 86400 * 1000)
  .find((part) => part.type === "literal" && part.source === "shared").value;

// PlainDateTime
assert.sameValue(
  dtf_apia.formatRange(pdt_apia, pdt_los_angeles),
  `12/30/11, 12:00 PM${usDateRangeSeparator}3/8/26, 2:00 AM`,
  "day is calculated correctly, ignoring the Pacific/Apia timezone"
);

assert.sameValue(
  dtf_los_angeles.formatRange(pdt_apia, pdt_los_angeles),
  `12/30/11, 12:00 PM${usDateRangeSeparator}3/8/26, 2:00 AM`,
  "hour is calculated correctly with the America/Los_Angeles timezone"
);

// PlainDate
assert.sameValue(
  dtf_apia.formatRange(pd_apia, pd_los_angeles),
  `12/30/11${usDateRangeSeparator}3/8/26`,
  "day is calculated correctly, ignoring the Pacific/Apia timezone"
);

// PlainTime
assert.sameValue(
  dtf_los_angeles.formatRange(pt_apia, pt_los_angeles),
  `12:00 PM${usDateRangeSeparator}2:00 AM`,
  "hour is calculated correctly with the America/Los_Angeles timezone"
);
