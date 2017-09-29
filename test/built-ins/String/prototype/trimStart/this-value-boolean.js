// Copyright (c) 2017 Valerie Young.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.trimStart
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

var trimStart = String.prototype.trimStart

assert.sameValue(
  trimStart.call(true),
  'true',
  'String.prototype.trimStart.call(true)'
);

assert.sameValue(
  String.prototype.trimStart.call(false),
  'false',
  'String.prototype.trimStart.call(false)'
);
