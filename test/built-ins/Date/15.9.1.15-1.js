// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.9.1.15-1
description: >
    Date Time String Format - specified default values will be set for
    all optional fields(MM, DD, mm, ss and time zone) when they are
    absent
---*/

        var result = false;
        var expectedDateTimeStr = new Date(1970, 0, 1, 0, 0, 0, 0).toISOString();
        var dateObj = new Date("1970");
        var dateStr = dateObj.toISOString();
        result = dateStr === expectedDateTimeStr;

assert(result, 'result !== true');
