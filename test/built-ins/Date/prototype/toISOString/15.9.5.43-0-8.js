// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.5.43-0-8
description: >
    Date.prototype.toISOString - RangeError is thrown when value of
    date is Date(1970, 0, -99999999, 0, 0, 0, -1), the time zone is
    UTC(0)
includes: [runTestCase.js]
---*/

function testcase() {
        var timeZoneMinutes = new Date().getTimezoneOffset() * (-1);
        var date, dateStr;
        try {
            if (timeZoneMinutes > 0) {
                date = new Date(1970, 0, -99999999, 0, 0, 0, -1);
            } else {
                date = new Date(1970, 0, -99999999, 0, 0 + timeZoneMinutes - 60, 0, -1);
            }

            dateStr = date.toISOString();

            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    }
runTestCase(testcase);
