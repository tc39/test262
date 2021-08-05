// Copyright 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.locale.prototype.weekInfo
description: >
    Checks that the return value of Intl.Locale.prototype.weekInfo is an Object
    with the correct keys and properties.
info: |
  get Intl.Locale.prototype.weekInfo
  ...
  7. Perform ! CreateDataPropertyOrThrow(info, "firstDay", wi.[[FirstDay]]).
  8. Perform ! CreateDataPropertyOrThrow(info, "weekendStart", wi.[[WeekendStart]]).
  9. Perform ! CreateDataPropertyOrThrow(info, "weekendEnd", wi.[[WeekendEnd]]).
  10. Perform ! CreateDataPropertyOrThrow(info, "minimalDays", wi.[[MinimalDays]]).
  ...

  CreateDataProperty ( O, P, V )
  ...
  3. Let newDesc be the PropertyDescriptor { [[Value]]: V, [[Writable]]: true,
  [[Enumerable]]: true, [[Configurable]]: true }.
features: [Reflect,Intl.Locale,Intl.Locale-info]
includes: [propertyHelper.js, compareArray.js]
---*/

const result = new Intl.Locale('en').weekInfo;
function isIntegerBetweenOneAndSeven(value) {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7;
}

assert.compareArray(Reflect.ownKeys(result), ['firstDay', 'weekendStart', 'weekendEnd', 'minimalDays']);

verifyProperty(result, 'firstDay', {
  writable: true,
  enumerable: true,
  configurable: true
});
assert(
  isIntegerBetweenOneAndSeven(new Intl.Locale('en').weekInfo.firstDay),
  '`firstDay` must be an integer between one and seven (inclusive)'
);

verifyProperty(result, 'weekendStart', {
  writable: true,
  enumerable: true,
  configurable: true
});
assert(
  isIntegerBetweenOneAndSeven(new Intl.Locale('en').weekInfo.weekendStart),
  '`weekendStart` must be an integer between one and seven (inclusive)'
);

verifyProperty(result, 'weekendEnd', {
  writable: true,
  enumerable: true,
  configurable: true
});
assert(
  isIntegerBetweenOneAndSeven(new Intl.Locale('en').weekInfo.weekendEnd),
  '`weekendEnd` must be an integer between one and seven (inclusive)'
);

verifyProperty(result, 'minimalDays', {
  writable: true,
  enumerable: true,
  configurable: true
});
assert(
  isIntegerBetweenOneAndSeven(new Intl.Locale('en').weekInfo.minimalDays),
  '`minimalDays` must be an integer between one and seven (inclusive)'
);
