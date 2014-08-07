/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.

//Global Scope Test Case Validator
var doneCalled;
function $DONE(argError) {

    var testError;
    var result, resultError;

    if (argError) {
        testError = argError.toString();
    }

    if (doneCalled) {
        // ? log called twice
        return;
    }
    doneCalled = true;

    //An exception is expected
    if (testDescrip.negative !== undefined) {
        //TODO - come up with a generic way of catching the error type
        //from this.onerror

        var negRegexp = new RegExp(testDescrip.negative, "i"),
            unkRegexp = /^UnknownError:/;
        

        if (!testError) { //no exception was thrown
            result = 'fail';
            resultError = Error('No exception was thrown; expected an error "message"' +
                                ' property matching the regular expression "' +
                                testDescrip.negative + '".');
        } else if (!negRegexp.test(testError) && 
                   !unkRegexp.test(testError)) {
            //wrong type of exception thrown
            result = 'fail';
            resultError = Error('Expected an exception with a "message"' +
                                ' property matching the regular expression "' +
                                testDescrip.negative +
                                '" to be thrown; actual was "' +
                                testError + '".');

        } else {
            result = 'pass';
            resultError = 'undefined';
        }
    } else if (testError) {
        //Exception was not expected to be thrown
        result = 'fail';
        resultError = Error('Unexpected exception, "' + testError + '" was thrown.');
    } else {
        result = 'pass';
        resultError = undefined;
    }

    testRun(testDescrip.id,
            testDescrip.path,
            testDescrip.description,
            testDescrip.code,
            result,
            resultError);

    //teardown
    testFinished();
}
