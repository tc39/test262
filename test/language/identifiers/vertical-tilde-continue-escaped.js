// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
id: sec-names-and-keywords
info: Test VERTICAL TILDE (U+2E2F) is not recognized as ID_Continue character.
description: >
  VERTICAL TILDE is in General Category 'Lm' and [:Pattern_Syntax:].
negative:
  type: SyntaxError
  phase: early
---*/

throw "Test262: This statement should not be evaluated.";

var a\u2E2F;
