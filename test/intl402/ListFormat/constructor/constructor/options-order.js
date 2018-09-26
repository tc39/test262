// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.ListFormat
description: Checks the order of operations on the options argument to the ListFormat constructor.
info: |
    InitializeListFormat (listFormat, locales, options)
    7. Let matcher be ? GetOption(options, "localeMatcher", "string", «"lookup", "best fit"», "best fit").
    14. Let s be ? GetOption(options, "style", "string", «"long", "short", "narrow"», "long").
    16. Let numeric be ? GetOption(options, "numeric", "string", «"always", "auto"», "always").
includes: [compareArray.js]
features: [Intl.ListFormat]
---*/

const callOrder = [];

new Intl.ListFormat([], {
  get type() {
    callOrder.push("type");
    return {
      toString() {
        callOrder.push("type toString");
        return "unit";
      }
    };
  },
  get style() {
    callOrder.push("style");
    return {
      toString() {
        callOrder.push("style toString");
        return "short";
      }
    };
  },
});

assert.compareArray(callOrder, [
  "type",
  "type toString",
  "style",
  "style toString",
]);
