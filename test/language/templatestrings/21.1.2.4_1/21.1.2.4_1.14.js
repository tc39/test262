// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Cascaded tag handlers"
---*/

function testHandler(callsiteObj, substitutions) {
    this.handler = function(callObj, subs) {
        return callObj.join();
    };
    if (callsiteObj.length == 2) {
        if (this.handler`Hi` != "Hi") {
            $ERROR("[Substitutions] Second level template handler returned wrong value. Expected : Hi Actual : " + this.handler`Hi`);
        }
    }
}
var name = "World";
testHandler`Hello ${name}`;
