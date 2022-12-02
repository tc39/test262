// Copyright (C) 2022 Rudolph Gottesheim. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Short German weekdays should be followed by a comma.
---*/

let dtf = new Intl.DateTimeFormat("de", { weekday: "short", day: "numeric", month: "long"});
assert.sameValue(dtf.format(new Date(2022, 12, 24)), "Sa., 24. Dezember", "German weekday without year");
