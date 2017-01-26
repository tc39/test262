// Copyright 2014 W3.org
// This work is licensed under a Creative Commons Attribution 4.0 International License.
// http://creativecommons.org/licenses/by/4.0/deed.en_GB

/**
 * Number.toFixed returns a string with the specified number of places to the right of the
 * decimal point, unless the number is >= 1e+21, in which case it returns the same as
 * Number.toString.
 * 
 * Number.toPrecision returns...
 * 
 * Number.toFixed and Number.toPrecision behavior is similar to Intl.NumberFormat.format
 * but differ in treatment of numbers larger than 1e+21. This test does not reproduce the
 * tests across locales and character sets found in the Intl.NumberFormat.format tests:
 *   test262/test/suite/intl402/ch11/11.3/11.3.2_TRP.js
 *   test262/website/harness/testIntl.js
 * Rather is looks at the locale-independent behavior.  It does borrow test cases from
 * 11.3.2_TRP.js, and uses a helper similar to that in testIntl.js.
 * 
 * @description Test Number.toFixed and Number.toPrecision.
 */

/**
 * Compares the expected of the given single-parameter method, called on the given value,
 * with the given expected, for each element in the test data list. Returns an error
 * message if any tests failed, else returns an empty string.
 */
function testNumberTo(method, testData) {
    var errors = "";
    testData.forEach(function(test) {
        var number = test.number;
        var param = test.param;
        var expected = test.expected;
        var actual = number[method](param);
        if (expected != actual) {
            var error = number.toString() + "." + method + "(" + param + ") expected " + expected + " actual " + actual + "\n";
            errors += error;
        };
    });
    return errors;
}

var toFixedTestData = [
    {"number": 0, "param": 2, "expected": "0.00"},
    {"number": -0, "param": 2, "expected": "0.00"},
    {"number": 123, "param": 2, "expected": "123.00"},
    {"number": -123, "param": 2, "expected": "-123.00"},
    {"number": 12345, "param": 2, "expected": "12345.00"},
    {"number": -12345, "param": 2, "expected": "-12345.00"},
    {"number": 123.45, "param": 2, "expected": "123.45"},
    {"number": -123.45, "param": 2, "expected": "-123.45"},
    {"number": 123.44499, "param": 2, "expected": "123.44"},
    {"number": -123.44499, "param": 2, "expected": "-123.44"},
    {"number": 123.44500, "param": 2, "expected": "123.44"},
    {"number": -123.44500, "param": 2, "expected": "-123.44"},
    {"number": 123.44501, "param": 2, "expected": "123.45"},
    {"number": -123.44501, "param": 2, "expected": "-123.45"},
    {"number": 0.1234, "param": 2, "expected": "0.12"},
    {"number": -0.1234, "param": 2, "expected": "-0.12"},
    {"number": 0.01234, "param": 2, "expected": "0.01"},
    {"number": -0.01234, "param": 2, "expected": "-0.01"},
    {"number": 0.00000000123, "param": 2, "expected": "0.00"},
    {"number": -0.00000000123, "param": 2, "expected": "-0.00"},
    {"number": 0.00000000000000000000000000000123, "param": 2, "expected": "0.00"},
    {"number": -0.00000000000000000000000000000123, "param": 2, "expected": "-0.00"},
    {"number": 1.2, "param": 2, "expected": "1.20"},
    {"number": -1.2, "param": 2, "expected": "-1.20"},
    {"number": 0.0000000012344501, "param": 2, "expected": "0.00"},
    {"number": -0.0000000012344501, "param": 2, "expected": "-0.00"},
    {"number": 123445.01, "param": 2, "expected": "123445.01"},
    {"number": -123445.01, "param": 2, "expected": "-123445.01"},
    {"number": 12344501000000000000000000000000000, "param": 2, "expected": "1.2344501e+34"},
    {"number": -12344501000000000000000000000000000, "param": 2, "expected": "-1.2344501e+34"},
    {"number": 0, "param": 20, "expected": "0.00000000000000000000"},
    {"number": -0, "param": 20, "expected": "0.00000000000000000000"},
    {"number": 123, "param": 20, "expected": "123.00000000000000000000"},
    {"number": -123, "param": 20, "expected": "-123.00000000000000000000"},
    {"number": 12345, "param": 20, "expected": "12345.00000000000000000000"},
    {"number": -12345, "param": 20, "expected": "-12345.00000000000000000000"},
    //{"number": 123.45, "param": 20, "expected": "123.45000000000000000000"},
    //{"number": -123.45, "param": 20, "expected": "-123.45000000000000000000"},
    //{"number": 123.44499, "param": 20, "expected": "123.44000000000000000000"},
    //{"number": -123.44499, "param": 20, "expected": "-123.44000000000000000000"},
    //{"number": 123.44500, "param": 20, "expected": "123.45000000000000000000"},
    //{"number": -123.44500, "param": 20, "expected": "-123.45000000000000000000"},
    //{"number": 123.44501, "param": 20, "expected": "123.450000000000000000000"},
    //{"number": -123.44501, "param": 20, "expected": "-123.45000000000000000000"},
    //{"number": 0.1234, "param": 20, "expected": "0.12340000000000000000"},
    //{"number": -0.1234, "param": 20, "expected": "-0.12340000000000000000"},
    //{"number": 0.01234, "param": 20, "expected": "0.01234000000000000000"},
    //{"number": -0.01234, "param": 20, "expected": "-0.01234000000000000000"},
    //{"number": 0.00000000123, "param": 20, "expected": "0.00000000123000000000"},
    //{"number": -0.00000000123, "param": 20, "expected": "-0.00000000123000000000"},
    //{"number": 0.00000000000000000000000000000123, "param": 20, "expected": "0.0000000000000000000000"},
    //{"number": -0.00000000000000000000000000000123, "param": 20, "expected": "0.0000000000000000000000"},
    //{"number": 1.2, "param": 20, "expected": "1.2000000000000000000000"},
    //{"number": -1.2, "param": 20, "expected": "-1.2000000000000000000000"},
    //{"number": 0.0000000012344501, "param": 20, "expected": "0.0000000000000000000000"},
    //{"number": -0.0000000012344501, "param": 20, "expected": "0.0000000000000000000000"},
    //{"number": 123445.01, "param": 20, "expected": "123450.0000000000000000000000"},
    //{"number": -123445.01, "param": 20, "expected": "-123450.0000000000000000000000"},
    {"number": 12344501000000000000000000000000000, "param": 20, "expected": "1.2344501e+34"},
    {"number": -12344501000000000000000000000000000, "param": 20, "expected": "-1.2344501e+34"}
];

/*
var toPrecisionTestData = [];
*/

// @ToDo: Check method signatures, range limits.

// Check expected results in given test data.
var errors = testNumberTo("toFixed", toFixedTestData);
if (errors != "") {
    $ERROR("Number_toFixed_toPrecision: " + errors);
}