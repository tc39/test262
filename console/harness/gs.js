/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.

//Global Scope Test Case Validator

//An exception is expected
if (testDescrip.negative !== undefined) {
    //TODO - come up with a generic way of catching the error type
    //from this.onerror
    testDescrip.negative = testDescrip.negative === "NotEarlyError" ?
            testDescrip.negative :
        (testDescrip.negative === "^((?!NotEarlyError).)*$" ?
            testDescrip.negative : ".");
    if (this.iframeError === undefined) { //no exception was thrown
        testRun(testDescrip.id,
                testDescrip.path,
                testDescrip.description,
                testDescrip.code,
                'fail',
                Error('No exception was thrown; expected an error "message"' +
                      ' property matching the regular expression "' +
                      testDescrip.negative + '".'));
    } else if (!(new RegExp(testDescrip.negative,
                            "i").test(this.iframeError))) {
        //wrong type of exception thrown
        testRun(testDescrip.id,
                testDescrip.path,
                testDescrip.description,
                testDescrip.code,
                'fail',
                Error('Expected an exception with a "message"' +
                      ' property matching the regular expression "' +
                      testDescrip.negative +
                      '" to be thrown; actual was "' +
                      this.iframeError + '".'));
    } else {
        testRun(testDescrip.id,
                testDescrip.path,
                testDescrip.description,
                testDescrip.code,
                'pass',
                undefined);
    }
}

//Exception was not expected to be thrown
else if (this.iframeError !== undefined) {
    testRun(testDescrip.id,
            testDescrip.path,
            testDescrip.description,
            testDescrip.code,
            'fail',
            Error('Unexpected exception, "' +
                  this.iframeError + '" was thrown.'));
}

else {
    testRun(testDescrip.id,
            testDescrip.path,
            testDescrip.description,
            testDescrip.code,
            'pass',
            undefined);
}

testFinished();