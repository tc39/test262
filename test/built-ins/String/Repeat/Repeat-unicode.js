// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat with unicode characters
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var unicodeChars = ["\uD842\uDFB7","\u{20BB7}","𠮷"];
        for(var i in unicodeChars){
            var val = String.prototype.repeat.call(unicodeChars[i],1);
            if(val!==unicodeChars[0] || val!==unicodeChars[1] || val!==unicodeChars[2]){
                $ERROR("String.prototype.repeat returned incorrect result for unicode characters");
                return false;
            }
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
