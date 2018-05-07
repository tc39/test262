// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-literals-string-literals
description: >
  PARAGRAPH SEPARATOR (U+2029) is allowed within string literals.
features: [json-superset]
---*/

eval("'foo\u2029bar\u2029baz\u2029qux'");
'foo bar baz qux';
