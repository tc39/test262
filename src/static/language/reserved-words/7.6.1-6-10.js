// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-6-10
description: >
    Allow reserved words as property names by dot operator assignment,
    accessed via indexing: in, try, class
---*/

        var tokenCodes  = {};
        tokenCodes.in = 0;
        tokenCodes.try = 1;
        tokenCodes.class = 2;
        var arr = [
            'in', 
            'try',
            'class'
         ];
         for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
