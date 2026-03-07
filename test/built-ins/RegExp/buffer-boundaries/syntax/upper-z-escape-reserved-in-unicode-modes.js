// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\Z` (upper-case Z) is reserved in any unicode mode.
info: |
  Patterns

  Note: While the sequence `\Z` is already an error when either the `u` (unicode) or `v` (unicode sets) modes are
  present, it is reserved for possible future use as an extension of the `\A` and `\z` assertions.

esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

assert.throws(SyntaxError, function() { new RegExp("\\Z", "u"); }, 'new RegExp("\\Z", "u")');
assert.throws(SyntaxError, function() { new RegExp("\\Z", "v"); }, 'new RegExp("\\Z", "v")');
