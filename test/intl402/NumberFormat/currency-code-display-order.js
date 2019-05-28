// Copyright 2019 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializenumberformat
description: Tests that currency codes are retrieved for all styles.
includes: [compareArray.js]
---*/

const styles = [
    undefined,
    "decimal",
    "percent",
    "currency",
];

for (const style of styles) {
    const actual = [];
    const options = {
        style,
        get currency() {
            actual.push("get currency");
            return {
                toString() {
                    actual.push("toString currency");
                    return "€";
                }
            }
        },
        get currencyDisplay() {
            actual.push("get currencyDisplay");
            return {
                toString() {
                    actual.push("toString currencyDisplay");
                    return "code";
                }
            }
        },
    };
    assert.throws(RangeError, () => {
        new Intl.NumberFormat(["de-de"], options);
    });
    assert.compareArray(actual, ["get currency", "toString currency", "get currencyDisplay", "toString currencyDisplay"]);
}
