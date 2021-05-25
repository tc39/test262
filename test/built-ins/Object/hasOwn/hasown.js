// Copyright 2021 Jamie Kyle.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.hasown
info: |
    Object.hasOwn ( _O_, _P_ )

    1. Let _obj_ be ? ToObject(_O_).
    2. Let _key_ be ? ToPropertyKey(_P_).
    3. Return ? HasOwnProperty(_obj_, _key_).
description: >
    Checking type of the Object.hasOwn and the returned result
author: Jamie Kyle
features: [Object.hasOwn]
---*/

//CHECK#1
if (typeof Object.hasOwn !== "function") {
  $ERROR('#1: hasOwn method is defined');
}

//CHECK#2
if (!(Object.hasOwn(Object, "hasOwn"))) {
  $ERROR('#2: hasOwn method works properly');
}
//
