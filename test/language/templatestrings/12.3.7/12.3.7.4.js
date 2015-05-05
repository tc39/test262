// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Tagged-Substitutions]] Member expression tagged template"
---*/

var nameSpace = function() {
   this.obj = {
        printHello : function() {
            return 'Hi';
        },
        printLiterals : function(literals, substitutions0) {
            var str = '';
            for (var i = 0; i < literals.length; i++) {
                str += literals[i];
            }
            return str;
        }
    };
}
var x = 10;
var newObj = new nameSpace();
var output = newObj.obj.printLiterals`Don't display x : ${x}`;

if (output != 'Don\'t display x : ') {
    $ERROR("[Tagged-Substitutions] Member expression tagged template invocation failed. Expected : Don't display x : || Actual : " + output);
}
