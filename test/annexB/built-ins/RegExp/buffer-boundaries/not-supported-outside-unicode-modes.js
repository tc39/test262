// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A` and `\z` (and `\Z`) are treated as IdentityEscape in Annex B outside any unicode mode
info: |
  Patterns
  
  Assertion[UnicodeMode, UnicodeSetsMode, NamedCaptureGroups] :
    ...
    [+UnicodeMode] `\` `A`
    [+UnicodeMode] `\` `z`
    ...

  IdentityEscape[UnicodeMode, NamedCaptureGroups] :
    [+UnicodeMode] SyntaxCharacter
    [+UnicodeMode] `/`
    [~UnicodeMode] SourceCharacterIdentityEscape[?NamedCaptureGroups]

  SourceCharacterIdentityEscape[NamedCaptureGroups] ::
    [~NamedCaptureGroups] SourceCharacter but not `c`
    [+NamedCaptureGroups] SourceCharacter but not one of `c` or `k`

esid: sec-regular-expressions-patterns
features: [regexp-buffer-boundaries]
---*/

// `\A` is |IdentityEscape| outside of any unicode mode
assert(/^\A$/.test("A"), "Expected \\A to match literal 'A' outside of unicode mode.");
assert(!/\Ax/.test("x"), "Expected \\A to not match start of buffer outside of unicode mode.");
assert(new RegExp("^\\A$").test("A"), "Expected \\A to match literal 'A' outside of unicode mode.");
assert(!new RegExp("\\Ax").test("x"), "Expected \\A to not match start of buffer outside of unicode mode.");

// `\z` is |IdentityEscape| outside of any unicode mode
assert(/^\z$/.test("z"), "Expected \\z to match literal 'z' outside of unicode mode.");
assert(!/x\z/.test("x"), "Expected \\z to not match end of buffer outside of unicode mode.");
assert(new RegExp("^\\z$").test("z"), "Expected \\z to match literal 'z' outside of unicode mode.");
assert(!new RegExp("x\\z").test("x"), "Expected \\z to not match end of buffer outside of unicode mode.");

// NOTE: ensures reserved `\Z` is |IdentityEscape| outside of any unicode mode
assert(/^\Z$/.test("Z"), "Expected \\Z to match literal 'Z' outside of unicode mode.");
assert(new RegExp("^\\Z$").test("Z"), "Expected \\Z to match literal 'Z' outside of unicode mode.");
