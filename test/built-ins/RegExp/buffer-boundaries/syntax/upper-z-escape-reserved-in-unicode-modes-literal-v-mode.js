// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\Z` (upper-case Z) is reserved in Unicode Sets ('v') mode.
info: |
  Patterns

  Note: While the sequence `\Z` is already an error when either the `u` (unicode) or `v` (unicode sets) modes are
  present, it is reserved for possible future use as an extension of the `\A` and `\z` assertions.

esid: sec-patterns
features: [regexp-buffer-boundaries]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\Z/v;
