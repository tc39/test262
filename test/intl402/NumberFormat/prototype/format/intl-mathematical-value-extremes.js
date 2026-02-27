// Copyright (C) 2026 dmvjs. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tointlmathematicalvalue
description: >
  ToIntlMathematicalValue clamps string values whose mathematical value rounds
  to zero or infinity as a Number.
info: |
  ToIntlMathematicalValue ( value )

  ...
  9. If intlMV is a mathematical value, then
     a. Let rounded be RoundMVResult(abs(intlMV)).
     b. If rounded is +∞𝔽 and intlMV < 0, return ~negative-infinity~.
     c. If rounded is +∞𝔽, return ~positive-infinity~.
     d. If rounded is +0𝔽 and intlMV < 0, return ~negative-zero~.
     e. If rounded is +0𝔽, return 0.
features: [Intl.NumberFormat-v3]
locale: [en-US]
---*/

// maximumSignificantDigits: 1 is used to expose incorrect preservation of the
// exact mathematical value in engines that do not apply step 9 clamping.
var nfSig = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 1 });
var nf = new Intl.NumberFormat("en-US");

// Values too small: MV rounds to +0 (step 9e) — must format as "0".
assert.sameValue(nfSig.format("1e-1000"), "0", "1e-1000");
assert.sameValue(nfSig.format("2e-324"),  "0", "2e-324 (largest inadmissible positive)");

// Values too small, negative: MV rounds to -0 (step 9d).
assert.sameValue(nfSig.format("-1e-1000"), nfSig.format(-0), "-1e-1000");
assert.sameValue(nfSig.format("-2e-324"),  nfSig.format(-0), "-2e-324 (largest inadmissible negative)");

// Values too large: MV rounds to +∞ (step 9c) — must format as ∞.
assert.sameValue(nf.format("1e1000"),                  nf.format(Infinity), "1e1000");
assert.sameValue(nf.format("1.7976931348623159e308"),  nf.format(Infinity), "1.7976931348623159e308 (smallest inadmissible large positive)");

// Values too large, negative: MV rounds to -∞ (step 9b).
assert.sameValue(nf.format("-1e1000"),                 nf.format(-Infinity), "-1e1000");
assert.sameValue(nf.format("-1.7976931348623159e308"), nf.format(-Infinity), "-1.7976931348623159e308 (smallest inadmissible large negative)");

// Admissible boundary values: must not be clamped to zero or infinity.
assert.notSameValue(nfSig.format("3e-324"),              "0",                "3e-324 (smallest admissible positive)");
assert.notSameValue(nfSig.format("-3e-324"),             nfSig.format(-0),   "-3e-324 (smallest admissible negative)");
assert.notSameValue(nf.format("1.7976931348623158e308"), nf.format(Infinity),"1.7976931348623158e308 (largest admissible positive)");
assert.notSameValue(nf.format("-1.7976931348623158e308"),nf.format(-Infinity),"-1.7976931348623158e308 (largest admissible negative)");
