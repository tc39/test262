// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TV of TemplateCharacter :: \ EscapeSequence is the SV of
    EscapeSequence.
negative: SyntaxError
---*/

`\x0`;
