// Copyright 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-pluralruleselect
description: Checks that the notation option is used appropriately in the select method.
info: |
  PluralRuleSelect (
    _locale_: a language tag,
    _type_: *"cardinal"* or *"ordinal"*,
    _notation_: a String,
    _s_: a decimal String,
  ): *"zero"*, *"one"*, *"two"*, *"few"*, *"many"*, or *"other"*
    ...
    The returned String characterizes the plural category of _s_ according to _locale_, _type_, and _notation_.
    ...
locale: [fr]
---*/

var values = [
  {
    value: 1e6,
    standard: "many",
    engineering: "many",
    scientific: "many",
    compact: "many",
  },

  {
    value: 1.5e6,
    standard: "other",
    engineering: "many",
    scientific: "many",
    compact: "many",
  },

  {
    value: 1e-6,
    standard: "one",
    engineering: "many",
    scientific: "many",
    compact: "one",
  },
];

var prstandard = new Intl.PluralRules("fr", { notation: "standard" });
var prengineering = new Intl.PluralRules("fr", { notation: "engineering" });
var prscientific = new Intl.PluralRules("fr", { notation: "scientific" });
var prcompact = new Intl.PluralRules("fr", { notation: "compact" });

for (var {value, standard, engineering, scientific, compact} of values) {
  assert.sameValue(prstandard.select(value), standard, `standard notation: ${value}`);
  assert.sameValue(prengineering.select(value), engineering, `engineering notation: ${value}`);
  assert.sameValue(prscientific.select(value), scientific, `scientific notation: ${value}`);
  assert.sameValue(prcompact.select(value), compact, `compact notation: ${value}`);
}
