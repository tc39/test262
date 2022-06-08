// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-setnfdigitoptions
description: Tests that the precision digits are determined correctly in NFv3 using the AO SetNumberFormatDigitOptions_v3
features: [Intl.NumberFormat-v3]
---*/

/* Utils */

// GetOptions utils
function MustGet(obj, propName) {
  if (!obj.hasOwnProperty(propName)) throw new Error(`MustGet: missing property "${propName}"`);
  return obj[propName];
}

// DefaultNumberOption utils
function DefaultNumberOption(value, minimum, maximum, fallback) {
  if (value === undefined) return fallback;
  value = Number(value);
  if (isNaN(value) || value < minimum || value > maximum) throw new RangeError(`DefaultNumberOption(${value}, ${minimum}, ${maximum}, ${fallback}): value out of range`);
  return Math.floor(value);
}

// function that reproduces the `SetNumberFormatDigitOptions` AO in nfv3
function SetNumberFormatDigitOptions_v3(/*intlObj,*/ options, mnfdDefault, mxfdDefault, notation) {
  const intlObj = {};
  try {
    // 1. Let _mnid_ be ? GetNumberOption(_options_, *"minimumIntegerDigits,"*, 1, 21, 1).
    let mnid = DefaultNumberOption(MustGet(options, "minimumIntegerDigits"), 1, 21, 1);
    // 2. Let _mnfd_ be ? Get(_options_, *"minimumFractionDigits"*).
    let mnfd = MustGet(options, "minimumFractionDigits");
    // 3. Let _mxfd_ be ? Get(_options_, *"maximumFractionDigits"*).
    let mxfd = MustGet(options, "maximumFractionDigits");
    // 4. Let _mnsd_ be ? Get(_options_, *"minimumSignificantDigits"*).
    let mnsd = MustGet(options, "minimumSignificantDigits");
    // 5. Let _mxsd_ be ? Get(_options_, *"maximumSignificantDigits"*).
    let mxsd = MustGet(options, "maximumSignificantDigits");
    // 6. Set _intlObj_.[[MinimumIntegerDigits]] to _mnid_.
    intlObj.MinimumIntegerDigits = mnid;
    // 7. Let _roundingPriority_ be ? GetOption(_options_, "roundingPriority", "string", « "auto", "morePrecision", "lessPrecision" », "auto").
    let roundingPriority = MustGet(options, "roundingPriority") || "auto"; /* Default to 'auto' */

    // 8. If _mnsd_ is not *undefined* or _mxsd_ is not *undefined*, then
    if (mnsd !== undefined || mxsd !== undefined) {
      // a. Set _hasSd_ to *true*.
      hasSd = true;
    }
    // 9. Else,
    else {
      // a. Set _hasSd_ to *false*.
      hasSd = false;
    }

    // 10. If _mnfd_ is not *undefined* or _mxfd_ is not *undefined*, then
    if (mnfd !== undefined || mxfd !== undefined) {
      // a. Set _hasFd_ to *true*.
      hasFd = true;
    }
    // 11. Else,
    else {
      // a. Set _hasFd_ to *false*.
      hasFd = false;
    }
    // 12. Let _needSd_ be *true*
    let needSd = true;
    // 13. Let _needFd_ be *true*
    let needFd = true;
    // 14. If _roundingPriority_ is  is *"auto"*, then
    if (roundingPriority === "auto") {
      // a. Set  _needSd_  to _hasFd_.
      needSd = hasSd;
      // b. Set _hasSd_  is *true*. or _hasFd_ is *false* and *notation* is *"compact"* , then
      if ((hasSd || !hasFd) && notation === "compact") {
        // i. Set  _needFd_  to *false*.
        needFd = false;
      }
    }

    // 15. If _needSd_ is *true*, then
    if (needSd) {
      // a. If _hasSd_ is *true*, then
      if (hasSd === true) {
        // i. Let _mnsd_ be ? DefaultNumberOption(_mnsd_, 1, 21, 1).
        mnsd = DefaultNumberOption(mnsd, 1, 21, 1);
        // ii. Let _mxsd_ be ? DefaultNumberOption(_mxsd_, _mnsd_, 21, 21).
        mxsd = DefaultNumberOption(mxsd, mnsd, 21, 21);
        // iii. Set _intlObj_.[[MinimumSignificantDigits]] to _mnsd_.
        intlObj.MinimumSignificantDigits = mnsd;
        // iv. Set _intlObj_.[[MaximumSignificantDigits]] to _mxsd_.
        intlObj.MaximumSignificantDigits = mxsd;
      }
      // b. Else,
      else {
        // i. Set _intlObj_.[[MinimumSignificantDigits]] to 1.
        intlObj.MinimumSignificantDigits = 1;
        // ii. Set _intlObj_.[[MaximumSignificantDigits]] to 21.
        intlObj.MaximumSignificantDigits = 21;
      }
    }

    // 16. If _needFd_ is *true*, then
    if (needFd) {
      // a. If _hasFd_, then
      if (hasFd) {
        // i. Let _mnfd_ be ? DefaultNumberOption(_mnfd_, 0, 20, *undefined*).
        mnfd = DefaultNumberOption(mnfd, 0, 20, undefined);
        // ii. Let _mxfd_ be ? DefaultNumberOption(_mxfd_, 0, 20, *undefined*).
        mxfd = DefaultNumberOption(mxfd, 0, 20, undefined);
        // iii. If _mnfd_ is *undefined*, set _mnfd_ to min(_mnfdDefault_, _mxfd_).
        if (mnfd === undefined) mnfd = Math.min(mnfdDefault, mxfd);
        // iv. Else if _mxfd_ is *undefined*, set _mxfd_ to max(_mxfdDefault_, _mnfd_).
        else if (mxfd === undefined) mxfd = Math.max(mxfdDefault, mnfd);
        // v. Else if _mnfd_ is greater than _mxfd_, throw a *RangeError* exception.
        else if (mnfd > mxfd) throw new RangeError(`mnfd ${mnfd} > mxfd ${mxfd}`);
        // vi. Set _intlObj_.[[MinimumFractionDigits]] to _mnfd_.
        intlObj.MinimumFractionDigits = mnfd;
        // vii. Set _intlObj_.[[MaximumFractionDigits]] to _mxfd_.
        intlObj.MaximumFractionDigits = mxfd;
      }
      // b. Else,
      else {
        // i. Set _intlObj_.[[MinimumFractionDigits]] to _mnfdDefault_.
        intlObj.MinimumFractionDigits = mnfdDefault;
        // ii. Set _intlObj_.[[MaximumFractionDigits]] to _mxfdDefault_.
        intlObj.MaximumFractionDigits = mxfdDefault;
      }
    }
    // 17. If _needSd_ is *true* or _needFd_ is *true*, then
    if (needSd || needFd) {
      // a. If _roundingPriority_ is *"morePrecision"*, then
      if (roundingPriority === "morePrecision") {
        // i. Set _intlObj_.[[RoundingType]] to ~morePrecision~.
        intlObj.RoundingType = "morePrecision";
      }
      // b. Else if _roundingPriority_ is *"lessPrecision"*, then
      else if (roundingPriority === "lessPrecision") {
        // i.  Set _intlObj_.[[RoundingType]] to ~lessPrecision~.
        intlObj.RoundingType = "lessPrecision";
      }
      // c. Else if _hasSd_ is *true*, then
      else if (hasSd) {
        // i. Set _intlObj_.[[RoundingType]] to ~significantDigits~.
        intlObj.RoundingType = "significantDigits";
      }
      // d. Else,
      else {
        // i. Set _intlObj_.[[RoundingType]] to ~fractionDigits~.
        intlObj.RoundingType = "fractionDigits";
      }
    }
    // 18. Else,
    else {
      // a. Set _intlObj_.[[RoundingType]] to ~morePrecision~.
      intlObj.RoundingType = "morePrecision";
      // b. Set _intlObj_.[[MinimumFractionDigits]] to 0.
      intlObj.MinimumFractionDigits = 0;
      // c. Set _intlObj_.[[MaximumFractionDigits]] to 0.
      intlObj.MaximumFractionDigits = 0;
      // d. Set _intlObj_.[[MinimumSignificantDigits]] to 1.
      intlObj.MinimumSignificantDigits = 1;
      // e. Set _intlObj_.[[MaximumSignificantDigits]] to 2.
      intlObj.MaximumSignificantDigits = 2;
    }
    return intlObj;
  } catch (ex) {
    return ex;
  }
}



function testResolvedOptions() {
  const digitsInputs = [undefined, 0, 1, 2, 20, 21, 22];
  for (let minimumIntegerDigits of digitsInputs) {
    for (let minimumFractionDigits of digitsInputs) {
      for (let maximumFractionDigits of digitsInputs) {
        for (let minimumSignificantDigits of digitsInputs) {
          for (let maximumSignificantDigits of digitsInputs) {
            for (let [mnfdDefault, mxfdDefault] of [[0, 3], [0, 0], [1, 1], [2, 2]]) {
              for (let notation of ["standard", "compact"]) {
                for (let roundingPriority of ["auto", "morePrecision", "lessPrecision"]) {

                  const options = {
                    minimumIntegerDigits,
                    minimumFractionDigits,
                    maximumFractionDigits,
                    minimumSignificantDigits,
                    maximumSignificantDigits,
                    roundingPriority,
                    notation,
                  };

                  const expected = SetNumberFormatDigitOptions_v3(/*intlObj,*/ options, mnfdDefault, mxfdDefault, notation);
                  const actual = new Intl.NumberFormat(options).resolvedOptions();

                  assert.sameValue(actual.minimumIntegerDigits, expected.MinimumIntegerDigits);
                  assert.sameValue(actual.minimumFractionDigits, expected.MinimumFractionDigits);
                  assert.sameValue(actual.maximumFractionDigits, expected.MaximumFractionDigits);
                  assert.sameValue(actual.minimumSignificantDigits, expected.MinimumSignificantDigits);
                  assert.sameValue(actual.maximumSignificantDigits, expected.MaximumSignificantDigits);

                }
              }
            }
          }
        }
      }
    }
  }
}


testResolvedOptions()
