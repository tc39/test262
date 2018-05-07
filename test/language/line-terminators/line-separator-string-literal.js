// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-literals-string-literals
description: >
  LINE SEPARATOR (U+2028) is allowed within string literals.
features: [json-superset]
---*/

eval("'foo\u2028bar\u2028baz\u2028qux'");
'foo bar baz qux';
