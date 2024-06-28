// Copyright (C) 2024 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-encodeforregexescape
description: Encodes surrogates correctly
info: |
  EncodeForRegExpEscape ( c )

  4. Let toEscape be StringToCodePoints(otherPunctuators).
  5. If toEscape contains c, c is matched by WhiteSpace or LineTerminator, or c has the same numeric value as a leading surrogate or trailing surrogate, then
    a. If c ≤ 0xFF, then
      ...
    b. Let escaped be the empty String.
    c. Let codeUnits be UTF16EncodeCodePoint(c).
    d. For each code unit cu of codeUnits, do
      i. Set escaped to the string-concatenation of escaped and UnicodeEscape(cu).
    e. Return escaped.
  6. Return UTF16EncodeCodePoint(c).
features: [RegExp.escape]
---*/

// Specific surrogate points
assert.sameValue(RegExp.escape('\uD800'), '\\uD800', 'High surrogate \\uD800 is correctly escaped');
assert.sameValue(RegExp.escape('\uDBFF'), '\\uDBFF', 'High surrogate \\uDBFF is correctly escaped');
assert.sameValue(RegExp.escape('\uDC00'), '\\uDC00', 'Low surrogate \\uDC00 is correctly escaped');
assert.sameValue(RegExp.escape('\uDFFF'), '\\uDFFF', 'Low surrogate \\uDFFF is correctly escaped');

// Leading Surrogates
const highSurrogatesGroup1 = '\uD800\uD801\uD802\uD803\uD804\uD805\uD806\uD807\uD808\uD809\uD80A\uD80B\uD80C\uD80D\uD80E\uD80F';
const highSurrogatesGroup2 = '\uD810\uD811\uD812\uD813\uD814\uD815\uD816\uD817\uD818\uD819\uD81A\uD81B\uD81C\uD81D\uD81E\uD81F';
const highSurrogatesGroup3 = '\uD820\uD821\uD822\uD823\uD824\uD825\uD826\uD827\uD828\uD829\uD82A\uD82B\uD82C\uD82D\uD82E\uD82F';
const highSurrogatesGroup4 = '\uD830\uD831\uD832\uD833\uD834\uD835\uD836\uD837\uD838\uD839\uD83A\uD83B\uD83C\uD83D\uD83E\uD83F';
const highSurrogatesGroup5 = '\uD840\uD841\uD842\uD843\uD844\uD845\uD846\uD847\uD848\uD849\uD84A\uD84B\uD84C\uD84D\uD84E\uD84F';
const highSurrogatesGroup6 = '\uD850\uD851\uD852\uD853\uD854\uD855\uD856\uD857\uD858\uD859\uD85A\uD85B\uD85C\uD85D\uD85E\uD85F';
const highSurrogatesGroup7 = '\uD860\uD861\uD862\uD863\uD864\uD865\uD866\uD867\uD868\uD869\uD86A\uD86B\uD86C\uD86D\uD86E\uD86F';
const highSurrogatesGroup8 = '\uD870\uD871\uD872\uD873\uD874\uD875\uD876\uD877\uD878\uD879\uD87A\uD87B\uD87C\uD87D\uD87E\uD87F';
const highSurrogatesGroup9 = '\uD880\uD881\uD882\uD883\uD884\uD885\uD886\uD887\uD888\uD889\uD88A\uD88B\uD88C\uD88D\uD88E\uD88F';
const highSurrogatesGroup10 = '\uD890\uD891\uD892\uD893\uD894\uD895\uD896\uD897\uD898\uD899\uD89A\uD89B\uD89C\uD89D\uD89E\uD89F';
const highSurrogatesGroup11 = '\uD8A0\uD8A1\uD8A2\uD8A3\uD8A4\uD8A5\uD8A6\uD8A7\uD8A8\uD8A9\uD8AA\uD8AB\uD8AC\uD8AD\uD8AE\uD8AF';
const highSurrogatesGroup12 = '\uD8B0\uD8B1\uD8B2\uD8B3\uD8B4\uD8B5\uD8B6\uD8B7\uD8B8\uD8B9\uD8BA\uD8BB\uD8BC\uD8BD\uD8BE\uD8BF';
const highSurrogatesGroup13 = '\uD8C0\uD8C1\uD8C2\uD8C3\uD8C4\uD8C5\uD8C6\uD8C7\uD8C8\uD8C9\uD8CA\uD8CB\uD8CC\uD8CD\uD8CE\uD8CF';
const highSurrogatesGroup14 = '\uD8D0\uD8D1\uD8D2\uD8D3\uD8D4\uD8D5\uD8D6\uD8D7\uD8D8\uD8D9\uD8DA\uD8DB\uD8DC\uD8DD\uD8DE\uD8DF';
const highSurrogatesGroup15 = '\uD8E0\uD8E1\uD8E2\uD8E3\uD8E4\uD8E5\uD8E6\uD8E7\uD8E8\uD8E9\uD8EA\uD8EB\uD8EC\uD8ED\uD8EE\uD8EF';
const highSurrogatesGroup16 = '\uD8F0\uD8F1\uD8F2\uD8F3\uD8F4\uD8F5\uD8F6\uD8F7\uD8F8\uD8F9\uD8FA\uD8FB\uD8FC\uD8FD\uD8FE\uD8FF';

assert.sameValue(RegExp.escape(highSurrogatesGroup1), '\\uD800\\uD801\\uD802\\uD803\\uD804\\uD805\\uD806\\uD807\\uD808\\uD809\\uD80A\\uD80B\\uD80C\\uD80D\\uD80E\\uD80F', 'High surrogates group 1 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup2), '\\uD810\\uD811\\uD812\\uD813\\uD814\\uD815\\uD816\\uD817\\uD818\\uD819\\uD81A\\uD81B\\uD81C\\uD81D\\uD81E\\uD81F', 'High surrogates group 2 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup3), '\\uD820\\uD821\\uD822\\uD823\\uD824\\uD825\\uD826\\uD827\\uD828\\uD829\\uD82A\\uD82B\\uD82C\\uD82D\\uD82E\\uD82F', 'High surrogates group 3 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup4), '\\uD830\\uD831\\uD832\\uD833\\uD834\\uD835\\uD836\\uD837\\uD838\\uD839\\uD83A\\uD83B\\uD83C\\uD83D\\uD83E\\uD83F', 'High surrogates group 4 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup5), '\\uD840\\uD841\\uD842\\uD843\\uD844\\uD845\\uD846\\uD847\\uD848\\uD849\\uD84A\\uD84B\\uD84C\\uD84D\\uD84E\\uD84F', 'High surrogates group 5 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup6), '\\uD850\\uD851\\uD852\\uD853\\uD854\\uD855\\uD856\\uD857\\uD858\\uD859\\uD85A\\uD85B\\uD85C\\uD85D\\uD85E\\uD85F', 'High surrogates group 6 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup7), '\\uD860\\uD861\\uD862\\uD863\\uD864\\uD865\\uD866\\uD867\\uD868\\uD869\\uD86A\\uD86B\\uD86C\\uD86D\\uD86E\\uD86F', 'High surrogates group 7 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup8), '\\uD870\\uD871\\uD872\\uD873\\uD874\\uD875\\uD876\\uD877\\uD878\\uD879\\uD87A\\uD87B\\uD87C\\uD87D\\uD87E\\uD87F', 'High surrogates group 8 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup9), '\\uD880\\uD881\\uD882\\uD883\\uD884\\uD885\\uD886\\uD887\\uD888\\uD889\\uD88A\\uD88B\\uD88C\\uD88D\\uD88E\\uD88F', 'High surrogates group 9 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup10), '\\uD890\\uD891\\uD892\\uD893\\uD894\\uD895\\uD896\\uD897\\uD898\\uD899\\uD89A\\uD89B\\uD89C\\uD89D\\uD89E\\uD89F', 'High surrogates group 10 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup11), '\\uD8A0\\uD8A1\\uD8A2\\uD8A3\\uD8A4\\uD8A5\\uD8A6\\uD8A7\\uD8A8\\uD8A9\\uD8AA\\uD8AB\\uD8AC\\uD8AD\\uD8AE\\uD8AF', 'High surrogates group 11 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup12), '\\uD8B0\\uD8B1\\uD8B2\\uD8B3\\uD8B4\\uD8B5\\uD8B6\\uD8B7\\uD8B8\\uD8B9\\uD8BA\\uD8BB\\uD8BC\\uD8BD\\uD8BE\\uD8BF', 'High surrogates group 12 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup13), '\\uD8C0\\uD8C1\\uD8C2\\uD8C3\\uD8C4\\uD8C5\\uD8C6\\uD8C7\\uD8C8\\uD8C9\\uD8CA\\uD8CB\\uD8CC\\uD8CD\\uD8CE\\uD8CF', 'High surrogates group 13 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup14), '\\uD8D0\\uD8D1\\uD8D2\\uD8D3\\uD8D4\\uD8D5\\uD8D6\\uD8D7\\uD8D8\\uD8D9\\uD8DA\\uD8DB\\uD8DC\\uD8DD\\uD8DE\\uD8DF', 'High surrogates group 14 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup15), '\\uD8E0\\uD8E1\\uD8E2\\uD8E3\\uD8E4\\uD8E5\\uD8E6\\uD8E7\\uD8E8\\uD8E9\\uD8EA\\uD8EB\\uD8EC\\uD8ED\\uD8EE\\uD8EF', 'High surrogates group 15 are correctly escaped');
assert.sameValue(RegExp.escape(highSurrogatesGroup16), '\\uD8F0\\uD8F1\\uD8F2\\uD8F3\\uD8F4\\uD8F5\\uD8F6\\uD8F7\\uD8F8\\uD8F9\\uD8FA\\uD8FB\\uD8FC\\uD8FD\\uD8FE\\uD8FF', 'High surrogates group 16 are correctly escaped');

// Trailing Surrogates
const lowSurrogatesGroup1 = '\uDC00\uDC01\uDC02\uDC03\uDC04\uDC05\uDC06\uDC07\uDC08\uDC09\uDC0A\uDC0B\uDC0C\uDC0D\uDC0E\uDC0F';
const lowSurrogatesGroup2 = '\uDC10\uDC11\uDC12\uDC13\uDC14\uDC15\uDC16\uDC17\uDC18\uDC19\uDC1A\uDC1B\uDC1C\uDC1D\uDC1E\uDC1F';
const lowSurrogatesGroup3 = '\uDC20\uDC21\uDC22\uDC23\uDC24\uDC25\uDC26\uDC27\uDC28\uDC29\uDC2A\uDC2B\uDC2C\uDC2D\uDC2E\uDC2F';
const lowSurrogatesGroup4 = '\uDC30\uDC31\uDC32\uDC33\uDC34\uDC35\uDC36\uDC37\uDC38\uDC39\uDC3A\uDC3B\uDC3C\uDC3D\uDC3E\uDC3F';
const lowSurrogatesGroup5 = '\uDC40\uDC41\uDC42\uDC43\uDC44\uDC45\uDC46\uDC47\uDC48\uDC49\uDC4A\uDC4B\uDC4C\uDC4D\uDC4E\uDC4F';
const lowSurrogatesGroup6 = '\uDC50\uDC51\uDC52\uDC53\uDC54\uDC55\uDC56\uDC57\uDC58\uDC59\uDC5A\uDC5B\uDC5C\uDC5D\uDC5E\uDC5F';
const lowSurrogatesGroup7 = '\uDC60\uDC61\uDC62\uDC63\uDC64\uDC65\uDC66\uDC67\uDC68\uDC69\uDC6A\uDC6B\uDC6C\uDC6D\uDC6E\uDC6F';
const lowSurrogatesGroup8 = '\uDC70\uDC71\uDC72\uDC73\uDC74\uDC75\uDC76\uDC77\uDC78\uDC79\uDC7A\uDC7B\uDC7C\uDC7D\uDC7E\uDC7F';
const lowSurrogatesGroup9 = '\uDC80\uDC81\uDC82\uDC83\uDC84\uDC85\uDC86\uDC87\uDC88\uDC89\uDC8A\uDC8B\uDC8C\uDC8D\uDC8E\uDC8F';
const lowSurrogatesGroup10 = '\uDC90\uDC91\uDC92\uDC93\uDC94\uDC95\uDC96\uDC97\uDC98\uDC99\uDC9A\uDC9B\uDC9C\uDC9D\uDC9E\uDC9F';
const lowSurrogatesGroup11 = '\uDCA0\uDCA1\uDCA2\uDCA3\uDCA4\uDCA5\uDCA6\uDCA7\uDCA8\uDCA9\uDCAA\uDCAB\uDCAC\uDCAD\uDCAE\uDCAF';
const lowSurrogatesGroup12 = '\uDCB0\uDCB1\uDCB2\uDCB3\uDCB4\uDCB5\uDCB6\uDCB7\uDCB8\uDCB9\uDCBA\uDCBB\uDCBC\uDCBD\uDCBE\uDCBF';
const lowSurrogatesGroup13 = '\uDCC0\uDCC1\uDCC2\uDCC3\uDCC4\uDCC5\uDCC6\uDCC7\uDCC8\uDCC9\uDCCA\uDCCB\uDCCC\uDCCD\uDCCE\uDCCF';
const lowSurrogatesGroup14 = '\uDCD0\uDCD1\uDCD2\uDCD3\uDCD4\uDCD5\uDCD6\uDCD7\uDCD8\uDCD9\uDCDA\uDCDB\uDCDC\uDCDD\uDCDE\uDCDF';
const lowSurrogatesGroup15 = '\uDCE0\uDCE1\uDCE2\uDCE3\uDCE4\uDCE5\uDCE6\uDCE7\uDCE8\uDCE9\uDCEA\uDCEB\uDCEC\uDCED\uDCEE\uDCEF';
const lowSurrogatesGroup16 = '\uDCF0\uDCF1\uDCF2\uDCF3\uDCF4\uDCF5\uDCF6\uDCF7\uDCF8\uDCF9\uDCFA\uDCFB\uDCFC\uDCFD\uDCFE\uDCFF';

assert.sameValue(RegExp.escape(lowSurrogatesGroup1), '\\uDC00\\uDC01\\uDC02\\uDC03\\uDC04\\uDC05\\uDC06\\uDC07\\uDC08\\uDC09\\uDC0A\\uDC0B\\uDC0C\\uDC0D\\uDC0E\\uDC0F', 'Low surrogates group 1 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup2), '\\uDC10\\uDC11\\uDC12\\uDC13\\uDC14\\uDC15\\uDC16\\uDC17\\uDC18\\uDC19\\uDC1A\\uDC1B\\uDC1C\\uDC1D\\uDC1E\\uDC1F', 'Low surrogates group 2 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup3), '\\uDC20\\uDC21\\uDC22\\uDC23\\uDC24\\uDC25\\uDC26\\uDC27\\uDC28\\uDC29\\uDC2A\\uDC2B\\uDC2C\\uDC2D\\uDC2E\\uDC2F', 'Low surrogates group 3 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup4), '\\uDC30\\uDC31\\uDC32\\uDC33\\uDC34\\uDC35\\uDC36\\uDC37\\uDC38\\uDC39\\uDC3A\\uDC3B\\uDC3C\\uDC3D\\uDC3E\\uDC3F', 'Low surrogates group 4 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup5), '\\uDC40\\uDC41\\uDC42\\uDC43\\uDC44\\uDC45\\uDC46\\uDC47\\uDC48\\uDC49\\uDC4A\\uDC4B\\uDC4C\\uDC4D\\uDC4E\\uDC4F', 'Low surrogates group 5 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup6), '\\uDC50\\uDC51\\uDC52\\uDC53\\uDC54\\uDC55\\uDC56\\uDC57\\uDC58\\uDC59\\uDC5A\\uDC5B\\uDC5C\\uDC5D\\uDC5E\\uDC5F', 'Low surrogates group 6 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup7), '\\uDC60\\uDC61\\uDC62\\uDC63\\uDC64\\uDC65\\uDC66\\uDC67\\uDC68\\uDC69\\uDC6A\\uDC6B\\uDC6C\\uDC6D\\uDC6E\\uDC6F', 'Low surrogates group 7 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup8), '\\uDC70\\uDC71\\uDC72\\uDC73\\uDC74\\uDC75\\uDC76\\uDC77\\uDC78\\uDC79\\uDC7A\\uDC7B\\uDC7C\\uDC7D\\uDC7E\\uDC7F', 'Low surrogates group 8 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup9), '\\uDC80\\uDC81\\uDC82\\uDC83\\uDC84\\uDC85\\uDC86\\uDC87\\uDC88\\uDC89\\uDC8A\\uDC8B\\uDC8C\\uDC8D\\uDC8E\\uDC8F', 'Low surrogates group 9 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup10), '\\uDC90\\uDC91\\uDC92\\uDC93\\uDC94\\uDC95\\uDC96\\uDC97\\uDC98\\uDC99\\uDC9A\\uDC9B\\uDC9C\\uDC9D\\uDC9E\\uDC9F', 'Low surrogates group 10 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup11), '\\uDCA0\\uDCA1\\uDCA2\\uDCA3\\uDCA4\\uDCA5\\uDCA6\\uDCA7\\uDCA8\\uDCA9\\uDCAA\\uDCAB\\uDCAC\\uDCAD\\uDCAE\\uDCAF', 'Low surrogates group 11 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup12), '\\uDCB0\\uDCB1\\uDCB2\\uDCB3\\uDCB4\\uDCB5\\uDCB6\\uDCB7\\uDCB8\\uDCB9\\uDCBA\\uDCBB\\uDCBC\\uDCBD\\uDCBE\\uDCBF', 'Low surrogates group 12 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup13), '\\uDCC0\\uDCC1\\uDCC2\\uDCC3\\uDCC4\\uDCC5\\uDCC6\\uDCC7\\uDCC8\\uDCC9\\uDCCA\\uDCCB\\uDCCC\\uDCCD\\uDCCE\\uDCCF', 'Low surrogates group 13 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup14), '\\uDCD0\\uDCD1\\uDCD2\\uDCD3\\uDCD4\\uDCD5\\uDCD6\\uDCD7\\uDCD8\\uDCD9\\uDCDA\\uDCDB\\uDCDC\\uDCDD\\uDCDE\\uDCDF', 'Low surrogates group 14 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup15), '\\uDCE0\\uDCE1\\uDCE2\\uDCE3\\uDCE4\\uDCE5\\uDCE6\\uDCE7\\uDCE8\\uDCE9\\uDCEA\\uDCEB\\uDCEC\\uDCED\\uDCEE\\uDCEF', 'Low surrogates group 15 are correctly escaped');
assert.sameValue(RegExp.escape(lowSurrogatesGroup16), '\\uDCF0\\uDCF1\\uDCF2\\uDCF3\\uDCF4\\uDCF5\\uDCF6\\uDCF7\\uDCF8\\uDCF9\\uDCFA\\uDCFB\\uDCFC\\uDCFD\\uDCFE\\uDCFF', 'Low surrogates group 16 are correctly escaped');
