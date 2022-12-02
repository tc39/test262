let dtf = new Intl.DateTimeFormat("de", { weekday: "short", day: "numeric", month: "long"});
assert.sameValue(dtf.format(new Date(2022, 12, 24)), "Sa., 24. Dezember", "German weekday without year");
