// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'trailing-comma.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 564621;
var summary = 'JSON.parse should reject {"a" : "b",} or [1,]';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

testJSON('[]', false);
testJSON('[1]', false);
testJSON('["a"]', false);
testJSON('{}', false);
testJSON('{"a":1}', false);
testJSON('{"a":"b"}', false);
testJSON('{"a":true}', false);
testJSON('[{}]', false);

testJSON('[1,]', true);
testJSON('["a",]', true);
testJSON('{,}', true);
testJSON('{"a":1,}', true);
testJSON('{"a":"b",}', true);
testJSON('{"a":true,}', true);
testJSON('[{,}]', true);
testJSON('[[1,]]', true);
testJSON('[{"a":"b",}]', true);
