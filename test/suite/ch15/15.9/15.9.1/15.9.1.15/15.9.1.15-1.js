// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.9.1.15-1
description: >
    Date Time String Format - specified default values will be set for
    all optional fields(MM, DD, mm, ss and time zone) when they are
    absent
includes: [runTestCase.js]
---*/

function testcase() {
        var result = false;
        var expectedDateTimeStr = new Date(1970, 0, 1, 0, 0, 0, 0).toISOString();
        var dateObj = new Date("1970");
        var dateStr = dateObj.toISOString();
        result = dateStr === expectedDateTimeStr;
        return result;
    }
runTestCase(testcase);
