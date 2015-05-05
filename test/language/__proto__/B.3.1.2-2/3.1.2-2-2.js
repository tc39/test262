// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ with value literal"
---*/

var testVector = [1, '', Infinity, NaN, undefined, true]
var obj = {};

for (var i = 0; i < testVector.length; i++) {

    try{
        obj.__proto__ = testVector[i];

    }catch(e){
            $ERROR('No Error Excpected');
    }
}
