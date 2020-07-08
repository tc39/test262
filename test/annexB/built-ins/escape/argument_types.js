// Copyright (C) 2020 Qu Xing. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-escape-string
description: Input is a null, undefined or boolean.
info: |
	B.2.1.1 escape(string)
	[...]
    	1. Let string be ? ToString(string).
---*/

assert.sameValue(escape(null), 'null');

assert.sameValue(escape(undefined), 'undefined');

assert.sameValue(escape(true), 'true');

assert.sameValue(escape(false), 'false');
