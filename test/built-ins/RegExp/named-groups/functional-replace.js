// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Function argument to String.prototype.replace gets groups as the
  third-to-last argument
esid: pending
features: [regexp-named-groups]
---*/

// --- Unicode mode ---

// @@replace with a callable replacement argument (no named captures).
{
  let result = "abcd".replace(/(.)(.)/u, (match, fst, snd, offset, str) => {
    assert.sameValue("ab", match);
    assert.sameValue("a", fst);
    assert.sameValue("b", snd);
    assert.sameValue(0, offset);
    assert.sameValue("abcd", str);
    return `${snd}${fst}`;
  });
  assert.sameValue("bacd", result);

  assert.sameValue("undefinedbcd", "abcd".replace(/(.)|(.)/u,
      (match, fst, snd, offset, str) => snd));
}

// @@replace with a callable replacement argument (global, named captures).
{
  let i = 0;
  let result = "abcd".replace(/(?<fst>.)(?<snd>.)/gu,
      (match, fst, snd, offset, str, groups) => {
    if (i == 0) {
      assert.sameValue("ab", match);
      assert.sameValue("a", groups.fst);
      assert.sameValue("b", groups.snd);
      assert.sameValue("a", fst);
      assert.sameValue("b", snd);
      assert.sameValue(0, offset);
      assert.sameValue("abcd", str);
    } else if (i == 1) {
      assert.sameValue("cd", match);
      assert.sameValue("c", groups.fst);
      assert.sameValue("d", groups.snd);
      assert.sameValue("c", fst);
      assert.sameValue("d", snd);
      assert.sameValue(2, offset);
      assert.sameValue("abcd", str);
    } else {
      assertUnreachable();
    }
    i++;
    return `${groups.snd}${groups.fst}`;
  });
  assert.sameValue("badc", result);

  assert.sameValue("undefinedundefinedundefinedundefined",
      "abcd".replace(/(?<fst>.)|(?<snd>.)/gu,
            (match, fst, snd, offset, str, groups) => groups.snd));
}

// @@replace with a callable replacement argument (non-global, named captures).
{
  let result = "abcd".replace(/(?<fst>.)(?<snd>.)/u,
      (match, fst, snd, offset, str, groups) => {
    assert.sameValue("ab", match);
    assert.sameValue("a", groups.fst);
    assert.sameValue("b", groups.snd);
    assert.sameValue("a", fst);
    assert.sameValue("b", snd);
    assert.sameValue(0, offset);
    assert.sameValue("abcd", str);
    return `${groups.snd}${groups.fst}`;
  });
  assert.sameValue("bacd", result);

  assert.sameValue("undefinedbcd",
      "abcd".replace(/(?<fst>.)|(?<snd>.)/u,
            (match, fst, snd, offset, str, groups) => groups.snd));
}

// --- Non-Unicode mode ---

// @@replace with a callable replacement argument (no named captures).
{
  let result = "abcd".replace(/(.)(.)/, (match, fst, snd, offset, str) => {
    assert.sameValue("ab", match);
    assert.sameValue("a", fst);
    assert.sameValue("b", snd);
    assert.sameValue(0, offset);
    assert.sameValue("abcd", str);
    return `${snd}${fst}`;
  });
  assert.sameValue("bacd", result);

  assert.sameValue("undefinedbcd", "abcd".replace(/(.)|(.)/,
      (match, fst, snd, offset, str) => snd));
}

// @@replace with a callable replacement argument (global, named captures).
{
  let i = 0;
  let result = "abcd".replace(/(?<fst>.)(?<snd>.)/g,
      (match, fst, snd, offset, str, groups) => {
    if (i == 0) {
      assert.sameValue("ab", match);
      assert.sameValue("a", groups.fst);
      assert.sameValue("b", groups.snd);
      assert.sameValue("a", fst);
      assert.sameValue("b", snd);
      assert.sameValue(0, offset);
      assert.sameValue("abcd", str);
    } else if (i == 1) {
      assert.sameValue("cd", match);
      assert.sameValue("c", groups.fst);
      assert.sameValue("d", groups.snd);
      assert.sameValue("c", fst);
      assert.sameValue("d", snd);
      assert.sameValue(2, offset);
      assert.sameValue("abcd", str);
    } else {
      assertUnreachable();
    }
    i++;
    return `${groups.snd}${groups.fst}`;
  });
  assert.sameValue("badc", result);

  assert.sameValue("undefinedundefinedundefinedundefined",
      "abcd".replace(/(?<fst>.)|(?<snd>.)/g,
            (match, fst, snd, offset, str, groups) => groups.snd));
}

// @@replace with a callable replacement argument (non-global, named captures).
{
  let result = "abcd".replace(/(?<fst>.)(?<snd>.)/,
      (match, fst, snd, offset, str, groups) => {
    assert.sameValue("ab", match);
    assert.sameValue("a", groups.fst);
    assert.sameValue("b", groups.snd);
    assert.sameValue("a", fst);
    assert.sameValue("b", snd);
    assert.sameValue(0, offset);
    assert.sameValue("abcd", str);
    return `${groups.snd}${groups.fst}`;
  });
  assert.sameValue("bacd", result);

  assert.sameValue("undefinedbcd",
      "abcd".replace(/(?<fst>.)|(?<snd>.)/,
            (match, fst, snd, offset, str, groups) => groups.snd));
}
