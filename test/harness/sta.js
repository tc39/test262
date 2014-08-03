/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.

var NotEarlyErrorString = "NotEarlyError";
var EarlyErrorRePat = "^((?!" + NotEarlyErrorString + ").)*$";
var NotEarlyError = new Error(NotEarlyErrorString);

function Test262Error(message) {
    this.message = message || "";
}

Test262Error.prototype.toString = function () {
    return "Test262 Error: " + this.message;
};

var $ERROR;
$ERROR = function $ERROR(message) {
    throw new Test262Error(message);
};

function testFailed(message) {
    $ERROR(message);
}
