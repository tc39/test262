// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-14
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: public, yield, interface
---*/

        var tokenCodes = {
            public: 0,
            yield: 1,
            interface: 2
        };
        var arr = [
            'public',
            'yield',
            'interface'
        ]; 
        for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
