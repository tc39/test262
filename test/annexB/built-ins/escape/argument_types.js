// Copyright (C) 2020 Qu Xing. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-escape-string
description: Input is a null, undefined or boolean.
info: |
	B.2.1.1 escape(string)
	[...]
    	1. Let string be ? ToString(string).
    	
    7.1.17 ToString(argument)
    
				Table 13: ToString Conversions

		Argument Type			    Result

		undefined				Return "undefined".
	
		null					Return "null".
	
		boolean					If argument is true, return "true".
							If argument is false, return "false".
---*/

assert.sameValue(escape(null), 'null');

assert.sameValue(escape(undefined), 'undefined');

assert.sameValue(escape(true), 'true');

assert.sameValue(escape(false), 'false');
