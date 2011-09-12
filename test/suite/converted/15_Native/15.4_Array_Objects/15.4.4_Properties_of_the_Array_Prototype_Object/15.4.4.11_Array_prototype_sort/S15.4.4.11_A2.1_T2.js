// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * * If ToString([[Get]] ToString(j)) < ToString([[Get]] ToString(k)), return -1.
 * If ToString([[Get]] ToString(j)) > ToString([[Get]] ToString(k)), return 1;
 * return -1
 *
 * @section 15.4.4.11
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.11_Array_prototype_sort/S15.4.4.11_A2.1_T2.js
 * @description Checking RUSSIAN ALPHABET
 */

var alphabetR = ["ё", "я", "ю", "э", "ь", "ы", "ъ", "щ", "ш", "ч", "ц", "х", "ф", "у", "т", "с", "р", "П", "О", "Н", "М", "Л", "К", "Й", "И", "З", "Ж", "Е", "Д", "Г", "В", "Б", "А"];
var  alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "ё"];

//CHECK#1
alphabetR.sort();
var result = true;
for (var i = 0; i < 26; i++) {
  if (alphabetR[i] !== alphabet[i]) result = false;
}

if (result !== true) {
  $ERROR('#1: CHECK RUSSIAN ALPHABET');
}

