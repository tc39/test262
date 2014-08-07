/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.

//Error Detector
if (this.window!==undefined) {  //for console support
    this.window.onerror = function(errorMsg, url, lineNumber, colNumber, error) {
        var cookedError;

        if (error) {
            cookedError = error.toString();
        } else {
            if (/Error:/.test(errorMsg)) {
                cookedError = errorMsg;
            } else {
                cookedError = "UnknownError: " + errorMsg;
            }
        }

        $DONE(cookedError);
    };
}

