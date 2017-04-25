// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-assertion
description: Test RegExp lookbehind
info: |
    The production Assertion :: (?<=Disjunction) evaluates as follows:
      1. Evaluate Disjunction with -1 as its direction argument to obtain a Matcher m.
      2. Return an internal Matcher closure that takes two arguments, a State x and a Continuation
         c, and performs the following steps:
        a. Let d be a Continuation that always returns its State argument as a successful MatchResult.
        b. Call m(x, d) and let r be its result.
        c. If r is failure, return failure.
        d. Let y be r's State.
        e. Let cap be y's captures List.
        f. Let xe be x's endIndex.
        g. Let z be the State (xe, cap).
        h. Call c(z) and return its result.
features: [regexp-lookbehind]
includes: [compareArray.js]
---*/

// Simple fixed-length matches.
assert.compareArray(["a"], "a".match(/^.(?<=a)/));
assert.sameValue(null, "b".match(/^.(?<=a)/));
assert.compareArray(["foo"], "foo1".match(/^f..(?<=.oo)/));
assert.compareArray(["foo"], "foo2".match(/^f\w\w(?<=\woo)/));
assert.sameValue(null, "boo".match(/^f\w\w(?<=\woo)/));
assert.sameValue(null, "fao".match(/^f\w\w(?<=\woo)/));
assert.sameValue(null, "foa".match(/^f\w\w(?<=\woo)/));
assert.compareArray(["def"], "abcdef".match(/(?<=abc)\w\w\w/));
assert.compareArray(["def"], "abcdef".match(/(?<=a.c)\w\w\w/));
assert.compareArray(["def"], "abcdef".match(/(?<=a\wc)\w\w\w/));
assert.compareArray(["cde"], "abcdef".match(/(?<=a[a-z])\w\w\w/));
assert.compareArray(["def"], "abcdef".match(/(?<=a[a-z][a-z])\w\w\w/));
assert.compareArray(["def"], "abcdef".match(/(?<=a[a-z]{2})\w\w\w/));
assert.compareArray(["bcd"], "abcdef".match(/(?<=a{1})\w\w\w/));
assert.compareArray(["cde"], "abcdef".match(/(?<=a{1}b{1})\w\w\w/));
assert.compareArray(["def"], "abcdef".match(/(?<=a{1}[a-z]{2})\w\w\w/));

// Variable-length matches.
assert.compareArray(["def"], "abcdef".match(/(?<=[a|b|c]*)[^a|b|c]{3}/));
assert.compareArray(["def"], "abcdef".match(/(?<=\w*)[^a|b|c]{3}/));

// Start of line matches.
assert.compareArray(["def"], "abcdef".match(/(?<=^abc)def/));
assert.compareArray(["def"], "abcdef".match(/(?<=^[a-c]{3})def/));
assert.compareArray(["def"], "xyz\nabcdef".match(/(?<=^[a-c]{3})def/m));
assert.compareArray(["ab", "cd", "efg"], "ab\ncd\nefg".match(/(?<=^)\w+/gm));
assert.compareArray(["ab", "cd", "efg"], "ab\ncd\nefg".match(/\w+(?<=$)/gm));
assert.compareArray(["ab", "cd", "efg"], "ab\ncd\nefg".match(/(?<=^)\w+(?<=$)/gm));
assert.sameValue(null, "abcdef".match(/(?<=^[^a-c]{3})def/));
assert.sameValue(null, "foooo".match(/"^foooo(?<=^o+)$/));
assert.sameValue(null, "foooo".match(/"^foooo(?<=^o*)$/));
assert.compareArray(["foo"], "foo".match(/^foo(?<=^fo+)$/));
assert.compareArray(["foooo"], "foooo".match(/^foooo(?<=^fo*)/));
assert.compareArray(["foo", "f"], "foo".match(/^(f)oo(?<=^\1o+)$/));
assert.compareArray(["foo", "f"], "foo".match(/^(f)oo(?<=^\1o+)$/i));
assert.compareArray(["foo\u1234", "f"], "foo\u1234".match(/^(f)oo(?<=^\1o+).$/i));
assert.compareArray(["def"], "abcdefdef".match(/(?<=^\w+)def/));
assert.compareArray(["def", "def"], "abcdefdef".match(/(?<=^\w+)def/g));

// Word boundary matches.
assert.compareArray(["def"], "abc def".match(/(?<=\b)[d-f]{3}/));
assert.compareArray(["def"], "ab cdef".match(/(?<=\B)\w{3}/));
assert.compareArray(["def"], "ab cdef".match(/(?<=\B)(?<=c(?<=\w))\w{3}/));
assert.sameValue(null, "abcdef".match(/(?<=\b)[d-f]{3}/));

// Capturing matches.
assert.compareArray(["def", "c"], "abcdef".match(/(?<=(c))def/));
assert.compareArray(["def", "bc"], "abcdef".match(/(?<=(\w{2}))def/));
assert.compareArray(["def", "bc", "c"], "abcdef".match(/(?<=(\w(\w)))def/));
assert.compareArray(["def", "a"], "abcdef".match(/(?<=(\w){3})def/));
assert.compareArray(["d", "bc", undefined], "abcdef".match(/(?<=(bc)|(cd))./));
assert.compareArray(["c", "a", undefined],
             "abcdef".match(/(?<=([ab]{1,2})\D|(abc))\w/));
assert.compareArray(["ab", "a", "b"], "abcdef".match(/\D(?<=([ab]+))(\w)/));
assert.compareArray(["c", "d"], "abcdef".match(/(?<=b|c)\w/g));
assert.compareArray(["cd", "ef"], "abcdef".match(/(?<=[b-e])\w{2}/g));

// Captures inside negative lookbehind. (They never capture.)
assert.compareArray(["de", undefined], "abcdef".match(/(?<!(^|[ab]))\w{2}/));

// Nested lookaround.
assert.compareArray(["ef"], "abcdef".match(/(?<=ab(?=c)\wd)\w\w/));
assert.compareArray(["ef", "bc"], "abcdef".match(/(?<=a(?=([^a]{2})d)\w{3})\w\w/));
assert.compareArray(["ef", "bc"],
             "abcdef".match(/(?<=a(?=([bc]{2}(?<!a{2}))d)\w{3})\w\w/));
assert.sameValue(null, "abcdef".match(/(?<=a(?=([bc]{2}(?<!a*))d)\w{3})\w\w/));
assert.compareArray(["faaa"], "faaao".match(/^faaao?(?<=^f[oa]+(?=o))/));

// Back references.
assert.compareArray(["b", "b", "bb"], "abb".match(/(.)(?<=(\1\1))/));
assert.compareArray(["B", "B", "bB"], "abB".match(/(.)(?<=(\1\1))/i));
assert.compareArray(["aB", "aB", "a"], "aabAaBa".match(/((\w)\w)(?<=\1\2\1)/i));
assert.compareArray(["Ba", "Ba", "a"], "aabAaBa".match(/(\w(\w))(?<=\1\2\1)/i));
assert.compareArray(["b", "b", "B"], "abaBbAa".match(/(?=(\w))(?<=(\1))./i));
assert.compareArray(["foo", "'", "foo"], "  'foo'  ".match(/(?<=(.))(\w+)(?=\1)/));
assert.compareArray(["foo", "\"", "foo"], "  \"foo\"  ".match(/(?<=(.))(\w+)(?=\1)/));
assert.sameValue(null, "  .foo\"  ".match(/(?<=(.))(\w+)(?=\1)/));
assert.sameValue(null, "ab".match(/(.)(?<=\1\1\1)/));
assert.sameValue(null, "abb".match(/(.)(?<=\1\1\1)/));
assert.compareArray(["b", "b"], "abbb".match(/(.)(?<=\1\1\1)/));
assert.sameValue(null, "ab".match(/(..)(?<=\1\1\1)/));
assert.sameValue(null, "abb".match(/(..)(?<=\1\1\1)/));
assert.sameValue(null, "aabb".match(/(..)(?<=\1\1\1)/));
assert.sameValue(null, "abab".match(/(..)(?<=\1\1\1)/));
assert.sameValue(null, "fabxbab".match(/(..)(?<=\1\1\1)/));
assert.sameValue(null, "faxabab".match(/(..)(?<=\1\1\1)/));
assert.compareArray(["ab", "ab"], "fababab".match(/(..)(?<=\1\1\1)/));

// Back references to captures inside the lookbehind.
assert.compareArray(["d", "C"], "abcCd".match(/(?<=\1(\w))d/i));
assert.compareArray(["d", "x"], "abxxd".match(/(?<=\1([abx]))d/));
assert.compareArray(["c", "ab"], "ababc".match(/(?<=\1(\w+))c/));
assert.compareArray(["c", "b"], "ababbc".match(/(?<=\1(\w+))c/));
assert.sameValue(null, "ababdc".match(/(?<=\1(\w+))c/));
assert.compareArray(["c", "abab"], "ababc".match(/(?<=(\w+)\1)c/));

// Alternations are tried left to right,
// and we do not backtrack into a lookbehind.
assert.compareArray(["xabcd", "cd", ""], "xabcd".match(/.*(?<=(..|...|....))(.*)/));
assert.compareArray(["xabcd", "bcd", ""], "xabcd".match(/.*(?<=(xx|...|....))(.*)/));
assert.compareArray(["xxabcd", "bcd", ""], "xxabcd".match(/.*(?<=(xx|...))(.*)/));
assert.compareArray(["xxabcd", "xx", "abcd"], "xxabcd".match(/.*(?<=(xx|xxx))(.*)/));

// We do not backtrack into a lookbehind.
// The lookbehind captures "abc" so that \1 does not match. We do not backtrack
// to capture only "bc" in the lookbehind.
assert.sameValue(null, "abcdbc".match(/(?<=([abc]+)).\1/));

// Greedy loop.
assert.compareArray(["c", "bbbbbb"], "abbbbbbc".match(/(?<=(b+))c/));
assert.compareArray(["c", "b1234"], "ab1234c".match(/(?<=(b\d+))c/));
assert.compareArray(["c", "b12b23b34"], "ab12b23b34c".match(/(?<=((?:b\d{2})+))c/));

// Sticky
var re1 = /(?<=^(\w+))def/g;
assert.compareArray(["def", "abc"], re1.exec("abcdefdef"));
assert.compareArray(["def", "abcdef"], re1.exec("abcdefdef"));
var re2 = /\Bdef/g;
assert.compareArray(["def"], re2.exec("abcdefdef"));
assert.compareArray(["def"], re2.exec("abcdefdef"));

// Misc
assert.sameValue(null, "abcdef".match(/(?<=$abc)def/));
assert.compareArray(["foo"], "foo".match(/^foo(?<=foo)$/));
assert.compareArray(["foo"], "foo".match(/^f.o(?<=foo)$/));
assert.sameValue(null, "fno".match(/^f.o(?<=foo)$/));
assert.sameValue(null, "foo".match(/^foo(?<!foo)$/));
assert.sameValue(null, "foo".match(/^f.o(?<!foo)$/));
assert.compareArray(["fno"], "fno".match(/^f.o(?<!foo)$/));
assert.compareArray(["foooo"], "foooo".match(/^foooo(?<=fo+)$/));
assert.compareArray(["foooo"], "foooo".match(/^foooo(?<=fo*)$/));
assert.compareArray(["abc", "abc"], /(abc\1)/.exec("abc"));
assert.compareArray(["abc", "abc"], /(abc\1)/.exec("abc\u1234"));
assert.compareArray(["abc", "abc"], /(abc\1)/i.exec("abc"));
assert.compareArray(["abc", "abc"], /(abc\1)/i.exec("abc\u1234"));
var oob_subject = "abcdefghijklmnabcdefghijklmn".substr(14);
assert.sameValue(null, oob_subject.match(/(?=(abcdefghijklmn))(?<=\1)a/i));
assert.sameValue(null, oob_subject.match(/(?=(abcdefghijklmn))(?<=\1)a/));
assert.sameValue(null, "abcdefgabcdefg".substr(1).match(/(?=(abcdefg))(?<=\1)/));

// Mutual recursive capture/back references
assert.compareArray(["cacb", "a", ""], /(?<=a(.\2)b(\1)).{4}/.exec("aabcacbc"));
assert.compareArray(["b", "ac", "ac"], /(?<=a(\2)b(..\1))b/.exec("aacbacb"));
assert.compareArray(["x", "aa"], /(?<=(?:\1b)(aa))./.exec("aabaax"));
assert.compareArray(["x", "aa"], /(?<=(?:\1|b)(aa))./.exec("aaaax"));
