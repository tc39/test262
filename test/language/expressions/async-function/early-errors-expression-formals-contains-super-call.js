// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: It is a syntax error if FormalParameters contains SuperProperty is true
negative: SyntaxError
---*/

(async function foo (foo = super()) { let bar; });
