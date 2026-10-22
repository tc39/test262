// Copyright (C) 2026 Nikita Skovoroda. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-wordcharacters
description: >
  \w with case-insensitive flag behaves differently in Unicode patterns.
info: |
  WordCharacters ( rer )
  The abstract operation WordCharacters takes argument rer (a RegExp Record) and returns a CharSet. Returns a CharSet containing the characters considered "word characters" for the purposes of \b, \B, \w, and \W It performs the following steps when called:

  1. Let basicWordChars be the CharSet containing every character in the ASCII word characters.
  2. Let extraWordChars be the CharSet containing all characters c such that c is not in basicWordChars but Canonicalize(rer, c) is in basicWordChars.
  3. Assert: extraWordChars is empty unless HasEitherUnicodeFlag(rer) is true and rer.[[IgnoreCase]] is true.
  4. Return the union of basicWordChars and extraWordChars.
---*/

assert.sameValue(/\w/.test('\u212a'), false);
assert.sameValue(/\w/u.test('\u212a'), false);
assert.sameValue(/\w/i.test('\u212a'), false);
assert.sameValue(/\w/ui.test('\u212a'), true);
