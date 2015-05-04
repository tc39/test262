// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] Verify that exceptions originating from
    templates are propagated properly
---*/

var x = 5;
var y;
var str;

try {
    y = (x++, `${(function(){ throw 'Error'; })()}`, ++x);
    $ERROR("[Substitutions] Didn't throw an expected exception");
} catch (exception) {
    if (exception !== 'Error') {
        $ERROR('[Substitutions] Exception originated from comma separated expression failed the verification. Expected : Error || Actual : ' + exception);
    }
    if (x !== 6) {
        $ERROR('[Substitutions] Value of x after exception originated from comma separated expression failed the verification. Expected : 6 || Actual : ' + x);
    }
};

try {
   `${y = (function(){throw 'Error';})(), x++, ++x}`;
   $ERROR("[Substitutions] Didn't throw an expected exception");
} catch (exception) {
   if (exception !== 'Error') {
        $ERROR('[Substitutions] Exception originated from comma separated expression inside a template failed the verification. Expected : Error || Actual : ' + exception);
    }
    if (x !== 6) {
        $ERROR('[Substitutions] Value of x after exception originated from comma separated expression inside a template failed the verification. Expected : 6 || Actual : ' + x);
    }
};
