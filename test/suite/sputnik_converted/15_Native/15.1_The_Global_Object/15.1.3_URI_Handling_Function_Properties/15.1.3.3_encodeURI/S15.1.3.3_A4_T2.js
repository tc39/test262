// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A4_T2;
 * @section: 15.1.3.3;
 * @assertion: URI tests;
 * @description: Checking RUSSIAN ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.3_A4_T2",

path: "15_Native\15.1_The_Global_Object\15.1.3_URI_Handling_Function_Properties\15.1.3.3_encodeURI\S15.1.3.3_A4_T2.js",

assertion: "URI tests",

description: "Checking RUSSIAN ALPHABET",

test: function testcase() {
   //CHECK#1
if ((encodeURI("http://ru.wikipedia.org/wiki/Юникод") !== "http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4") && (encodeURI("http://ru.wikipedia.org/wiki/Юникод") !== "http://ru.wikipedia.org/wiki/" + "%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4".toLowerCase())) {
  $ERROR('#1: http://ru.wikipedia.org/wiki/Юникод');
}

//CHECK#2
if ((encodeURI("http://ru.wikipedia.org/wiki/Юникод#Ссылки") !== "http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8") && (encodeURI("http://ru.wikipedia.org/wiki/Юникод#Ссылки") !== "http://ru.wikipedia.org/wiki/" + "%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8".toLowerCase())) {
  $ERROR('#2: http://ru.wikipedia.org/wiki/Юникод#Ссылки');
}

//CHECK#3
if ((encodeURI("http://ru.wikipedia.org/wiki/Юникод#Версии Юникода") !== "http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%92%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0") && ((encodeURI("http://ru.wikipedia.org/wiki/Юникод#Версии Юникода") !== "http://ru.wikipedia.org/wiki/" + "%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%92%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0".toLowerCase()))) {
  $ERROR('#3: http://ru.wikipedia.org/wiki/Юникод#Версии Юникода');
}

 }
});

