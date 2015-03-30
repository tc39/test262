// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TRV of LineTerminatorSequence :: <LF> is the code unit value 0x000A.
    The TRV of LineTerminatorSequence :: <CR> is the code unit value 0x000A.
    The TRV of LineTerminatorSequence :: <CR><LF> is the sequence consisting of
    the code unit value 0x000A.
---*/
var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], '\n\n\n');
})`

`;
assert.sameValue(calls, 1);
