// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Octal BigInt literal containing an invalid digit
esid: pending
features: [BigInt]
negative:
  phase: early
  type: SyntaxError
---*/

0o9n;
