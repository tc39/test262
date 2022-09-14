// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Negating Unicode property escapes for `Emoji_Keycap_Sequence` (property of strings) with `[^\p{…}]` throws an early error.
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-isvalidregularexpressionliteral
features: [regexp-unicode-property-escapes, regexp-v-flag]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/[^\p{Emoji_Keycap_Sequence}]/v;
