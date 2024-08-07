// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Array-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/if (typeof Intl === "object") {
    const localeSep = [,,].toLocaleString();

    assert.sameValue([NaN].toLocaleString("ar"), "ليس رقم");
    assert.sameValue([NaN].toLocaleString(["zh-hant", "ar"]), "非數值");
    assert.sameValue([Infinity].toLocaleString("dz"), "གྲངས་མེད");
    assert.sameValue([-Infinity].toLocaleString(["fr", "en"]), "-∞");

    const sampleValues = [
        -0, +0, -1, +1, -2, +2, -0.5, +0.5,
    ];
    const sampleLocales = [
        void 0,
        "en",
        "th-th-u-nu-thai",
        ["tlh", "de"],
    ];
    const sampleOptions = [
        void 0,
        {},
        {style: "percent"},
        {style: "currency", currency: "USD", minimumIntegerDigits: 4},
    ];
    for (let locale of sampleLocales) {
        for (let options of sampleOptions) {
            let nf = new Intl.NumberFormat(locale, options);
            let expected = sampleValues.map(nf.format).join(localeSep);
            assert.sameValue(sampleValues.toLocaleString(locale, options), expected);
        }
    }
}

