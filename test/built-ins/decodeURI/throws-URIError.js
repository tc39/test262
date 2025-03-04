// Copyright (C) 2025 ayuan.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Verify decodeURIComponent throws URIError for various invalid UTF-8 sequences
    Reference: https://stackoverflow.com/a/1319229/172999
esid: sec-decodeuricomponent-encodeduricomponent
description: |
    Invalid sequences include:
    - Surrogate pair encoding
    - Overlong encoding
    - Invalid continuation bytes
    - Incomplete sequences
    - Out-of-range code points
features: [uricode]
---*/

// CHECK#1: Reserved surrogate pair (U+D800-DFFF)
(function CHECK1() {
    var result = true;
    try {
        decodeURIComponent('%ED%BF%BF');
        result = false;
    } catch (e) {
        if (!(e instanceof URIError)) result = false;
    }
    if (!result) {
        throw new Test262Error('#1: %ED%BF%BF (surrogate pair) should throw URIError');
    }
})();

// CHECK#2: Overlong encoding for ASCII character
(function CHECK2() {
    var result = true;
    try {
        decodeURIComponent('%C0%AF');
        result = false;
    } catch (e) {
        if (!(e instanceof URIError)) result = false;
    }
    if (!result) {
        throw new Test262Error('#2: %C0%AF (overlong encoding) should throw URIError');
    }
})();

// CHECK#3: Invalid continuation byte pattern
(function CHECK3() {
    var result = true;
    try {
        decodeURIComponent('%ED%7F%BF');
        result = false;
    } catch (e) {
        if (!(e instanceof URIError)) result = false;
    }
    if (!result) {
        throw new Test262Error('#3: %ED%7F%BF (invalid continuation) should throw URIError');
    }
})();

// CHECK#4: Incomplete 3-byte sequence
(function CHECK4() {
    var result = true;
    try {
        decodeURIComponent('%ED%BF');
        result = false;
    } catch (e) {
        if (!(e instanceof URIError)) result = false;
    }
    if (!result) {
        throw new Test262Error('#4: %ED%BF (incomplete sequence) should throw URIError');
    }
})();

// CHECK#5: Code point beyond U+10FFFF
(function CHECK5() {
    var result = true;
    try {
        decodeURIComponent('%F4%90%80%80');
        result = false;
    } catch (e) {
        if (!(e instanceof URIError)) result = false;
    }
    if (!result) {
        throw new Test262Error('#5: %F4%90%80%80 (out-of-range) should throw URIError');
    }
})();