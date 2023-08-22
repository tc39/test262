// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-Intl.DisplayNames.prototype.of
description: Returns string value for valid `region` codes
info: |
  12.5.1 CanonicalCodeForDisplayNames ( type, code )

  ...
  2. If type is "region", then
    a. If code cannot be matched by the unicode_region_subtag Unicode locale nonterminal, throw a RangeError exception.
    b. Return the ASCII-uppercase of code.
features: [Intl.DisplayNames]
---*/

var displayNames = new Intl.DisplayNames(undefined, {type: 'region'});

assert.sameValue(typeof displayNames.of('aa'), 'string', 'aa');
assert.sameValue(typeof displayNames.of('AA'), 'string', 'ZZ');
assert.sameValue(typeof displayNames.of('000'), 'string', '000');
