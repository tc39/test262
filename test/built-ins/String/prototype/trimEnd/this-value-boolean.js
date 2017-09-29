// Copyright (c) 2017 Valerie Young.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimEnd
description: Behavior when "this" value is a boolean.
info: |
  TrimString
  2. Let S be ? ToString(str).

  ToString
  Argument Type: Boolean
  Result:
    If argument is true, return "true".
    If argument is false, return "false".
features: [string-trimming]
---*/

var trimEnd = String.prototype.trimEnd

assert.sameValue(
  trimEnd.call(true),
  'true',
  'String.prototype.trimEnd.call(true)'
);

assert.sameValue(
  String.prototype.trimEnd.call(false),
  'false',
  'String.prototype.trimEnd.call(false)'
);
