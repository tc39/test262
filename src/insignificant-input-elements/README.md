This directory should contain a `.case` test case file
for each character that is either [_WhiteSpace_](https://tc39.es/ecma262/#sec-white-space)
or [_LineTerminator_](https://tc39.es/ecma262/#sec-line-terminators).
Because the former is defined in terms of the Unicode "Space_Separator" category,
it can change over time even if the ECMAScript specification does not.

A current list can be fetched as `[:Space_Separator:]` using a tool
such as the Unicode UnicodeSet utility:
https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3ASpace_Separator%3A%5D&g=&i=
