// Copyright 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-initializepluralrules
description: Checks that the notation option is picked up correctly.
---*/

assert.sameValue(new Intl.PluralRules('fr-FR', { notation: 'compact' }).select(1.00000020e6), 'one', 'compact notation');
assert.sameValue(new Intl.PluralRules('fr-FR', { notation: 'standard' }).select(1.00000020e6), 'other', 'standard notation');
