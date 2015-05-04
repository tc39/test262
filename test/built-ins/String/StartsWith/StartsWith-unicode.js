// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with unicode values as search string.
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var unicodeChars = ["\uD842\uDFB7","\u{20BB7}","𠮷"];
        for(var i in unicodeChars){
            var val = unicodeChars[i];
            if(val.startsWith(unicodeChars[0])!==true || val.startsWith(unicodeChars[1])!==true || val.startsWith(unicodeChars[2])!==true){
                $ERROR("String.prototype.repeat returned incorrect result for unicode characters");
                return false;

            }
        }
        var cu1 = "\uD842";  // testing with code unit
        return unicodeChars[2].startsWith(cu1);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
