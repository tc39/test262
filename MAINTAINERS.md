# Test262 Maintainer Guidelines

## CLDR

Some tests presume data/behaviours/etc. propagated via [CLDR](https://cldr.unicode.org/), such as those asserting the association of properties with Unicode code points as exposed in regular expressions at [test/built-ins/RegExp/property-escapes](./test/built-ins/RegExp/property-escapes).
To protect implementations from spurious test failures before they incorporate a new CLDR release, we provide a one month grace period for merging tests dependent upon its contents.
