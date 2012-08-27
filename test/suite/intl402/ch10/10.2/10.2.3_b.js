// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that Intl.Collator does not accept Unicode locale
 *     extension keys and values that are not allowed.
 * @author Norbert Lindenberg
 */

$INCLUDE("testIntl.js");

var defaultCollator = new Intl.Collator();
var defaultOptions = defaultCollator.resolvedOptions();
var defaultOptionsJSON = JSON.stringify(defaultOptions);
var defaultLocale = defaultOptions.locale;
var defaultSortedArray = ["hello", "你好", "こんにちは", "pêche", "peché", "9", "10"].sort(defaultCollator.compare);


var keyValues = {
    "co": ["standard", "search", "invalid"],
    "ka": ["noignore", "shifted", "invalid"],
    "kb": ["true", "false", "invalid"],
    "kc": ["true", "false", "invalid"],
    "kh": ["true", "false", "invalid"],
    "kr": ["latn-hira-hani", "hani-hira-latn", "invalid"],
    "ks": ["level1", "level2", "level3", "level4", "identic", "invalid"],
    "vt": ["1234-5678-9abc-edf0", "invalid"]
};

var testArray = defaultSortedArray.slice(0);

Object.getOwnPropertyNames(keyValues).forEach(function (key) {
    keyValues[key].forEach(function (value) {
        var collator = new Intl.Collator([defaultLocale + "-u-" + key + "-" + value]);
        var options = collator.resolvedOptions();
        if (options.locale !== defaultLocale) {
            $ERROR("Locale " + options.locale + " is affected by key " +
                key + "; value " + value + ".");
        }
        if (JSON.stringify(options) !== defaultOptionsJSON) {
            $ERROR("Resolved options " + JSON.stringify(options) + " are affected by key " +
                key + "; value " + value + ".");
        }
        testArraysAreSame(defaultSortedArray, testArray.sort(collator.compare));
    });
});

