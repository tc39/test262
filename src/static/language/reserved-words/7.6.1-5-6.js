// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-6
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: continue, for, switch
---*/

        var tokenCodes  = { 
            continue: 0, 
            for: 1, 
            switch: 2
        };
        var arr = [
            'continue', 
            'for',
            'switch'
        ];  
        for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
