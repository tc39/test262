// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat
description: Checks the order of operations on the options argument to the DurationFormat constructor.
info: |
    InitializeDurationFormat (DurationFormat, locales, options)
    7. Let matcher be ? GetOption(options, "localeMatcher", "string", «"lookup", "best fit"», "best fit").
    14. Let s be ? GetOption(options, "style", "string", «"long", "short", "narrow"», "long").
    16. Let numeric be ? GetOption(options, "numeric", "string", «"always", "auto"», "always").
includes: [compareArray.js]
features: [Intl.DurationFormat]
---*/

const callOrder = [];

new Intl.DurationFormat([], {
  get localeMatcher() {
    callOrder.push("localeMatcher");
    return {
      toString() {
        callOrder.push("localeMatcher toString");
        return "best fit";
      }
    };
  },
  get numberingSystem() {
    callOrder.push("numberingSystem");
    return {
      toString() {
        callOrder.push("numberingSystem toString");
        return "latn";
      }
    };
  },
  get style() {
    callOrder.push("style");
    return {
      toString() {
        callOrder.push("style toString");
        return "long";
      }
    };
  },
});

assert.compareArray(callOrder, [
  "localeMatcher",
  "localeMatcher toString",
  "numberingSystem",
  "numberingSystem toString",
  "style",
  "style toString"
]);
