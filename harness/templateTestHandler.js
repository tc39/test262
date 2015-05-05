// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Helper handler method for tagged string templates
---*/

function testHandler(literals) {
    literals.raw = new Array(); // Raw object is frozen so this should not change literals

    for (var propName in literals) {
        if (propName === "raw") { // Check if the raw property is enumerable
            $ERROR('Failed: raw property is enumerable');
        }
    }

    for (var i = 0; i < literals.length; i++) { // Will the length include the raw object??
        literals[i] = "random string";      // All elements of both array are non-writeable
        delete literals[i];                  // and non-configurable
        literals.raw[i] = "random string";
    }

    // Validating the test input
    if (cookedStrings.length != rawStrings.length) {
        $ERROR('Test error: Siteobj and raw strings array are of different length');
    }

    // Verify cookedString values match the passed in values
    if (cookedStrings.length != literals.length) {
        $ERROR('Literals length seems to be different Actual : ' + literals.length + ' Expected : ' + cookedStrings.length);
    } else {
        for (var i = 0; i < cookedStrings.length; i++) {
            if (literals[i] !== cookedStrings[i]) {
                $ERROR('Literals are differing at the index ' + i + ' Actual : ' + literals[i] + ' Expected : ' + cookedStrings[i]);
            }
        }
    }

    // Verify rawString values match the passed in values
    if (rawStrings.length != literals.raw.length) {
        $ERROR('Raw string array length seems to be different Actual : ' + literals.raw.length + ' Expected : ' + rawStrings.length);
    } else {
        for (var i = 0; i < rawStrings.length; i++) {
            if (literals.raw[i] !== rawStrings[i]) {
                $ERROR('Raw strings are differing at the index ' + i + ' Actual : ' + literals.raw[i] + ' Expected : ' + rawStrings[i]);
            }
        }
    }

    // Validate the substitutions
    if (substitutions) {
        if (!arguments || arguments.length - 1 != substitutions.length) {
            $ERROR('Substitutions differ Actual : ' + arguments + ' Expected : ' + substitutions);
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === substitutions[i]) {
                    $ERROR('Substitutions are differing at index ' + i + ' Actual : ' + arguments[i] + ' Expected : ' + substitutions[i]);
                }
            }
        }
    }
    else if (arguments) {
        $ERROR('Expected substitutions are null and arguments are not null');
    }

    return "Success";
}
