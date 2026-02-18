// This file was procedurally generated from the following sources:
// - tools/generation/test/fixtures/regexp.case
// - tools/generation/test/fixtures/regexp/substitution.template
/*---
description: test (RegExp template)
esid: sec-regexp
flags: [generated]
info: |
    template info

    case info
---*/

// Normal substitution comments are not expanded inside a RegExp literal:

/foo/*{ nosubst }*/baz/;
//*{ nosubst }*//;

// Use placeholder-prefix and placeholder-suffix for those cases:

/foobarbaz/;
/bar/;

// Two substitutions in one line should work:

/foobarbarbaz/;

// placeholder-prefix and placeholder-suffix work everywhere,
// regardless of syntax:

bar;
'bar';
//bar...in a comment
/*bar...in a block comment */

// Leading and trailing spaces in the delimiters are significant, i.e. these
// are not substituted:
%%{ subst }%%;
%%{ subst }%% ;
 %%{ subst }%%;
/foo%%{ subst }%%bar/;

// The delimiter pair must occur on one line, this is not substituted:

/ %%{ subst
}%% /;
