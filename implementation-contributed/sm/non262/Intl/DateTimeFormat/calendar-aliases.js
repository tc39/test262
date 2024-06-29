// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-DateTimeFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// Ensure ethiopic-amete-alem is resolved to ethioaa instead of ethiopic.
function testEthiopicAmeteAlem() {
    var locale = "am-ET-u-nu-latn";
    var opts = {timeZone: "Africa/Addis_Ababa"};
    var dtfEthiopicAmeteAlem = new Intl.DateTimeFormat(`${locale}-ca-ethiopic-amete-alem`, opts);
    var dtfEthioaa = new Intl.DateTimeFormat(`${locale}-ca-ethioaa`, opts);
    var dtfEthiopic = new Intl.DateTimeFormat(`${locale}-ca-ethiopic`, opts);

    var date = new Date(2016, 1 - 1, 1);

    assert.sameValue(dtfEthiopicAmeteAlem.format(date), dtfEthioaa.format(date));
    assert.sameValue(dtfEthiopicAmeteAlem.format(date) === dtfEthiopic.format(date), false);
}

// Ensure islamicc is resolved to islamic-civil.
function testIslamicCivil() {
    var locale = "ar-SA-u-nu-latn";
    var opts = {timeZone: "Asia/Riyadh"};
    var dtfIslamicCivil = new Intl.DateTimeFormat(`${locale}-ca-islamic-civil`, opts);
    var dtfIslamicc = new Intl.DateTimeFormat(`${locale}-ca-islamicc`, opts);
    var dtfIslamic = new Intl.DateTimeFormat(`${locale}-ca-islamic`, opts);

    var date = new Date(2016, 1 - 1, 1);

    assert.sameValue(dtfIslamicCivil.format(date), dtfIslamicc.format(date));
    assert.sameValue(dtfIslamicCivil.format(date) === dtfIslamic.format(date), false);
}

testEthiopicAmeteAlem();
testIslamicCivil();

