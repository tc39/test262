// Copyright (C) 2017 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Static public fields are not supported
features: [class, class-fields-public]
---*/

assert.throws.early(SyntaxError, "class C { static field; }");
assert.throws.early(SyntaxError, "class C { static field = 0; }");
assert.throws.early(SyntaxError, "class C { static ['field']; }");
assert.throws.early(SyntaxError, "class C { static ['field'] = 0; }");
