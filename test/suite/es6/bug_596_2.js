// Copyright (c) 2014, Thomas Dahlstrom All rights reserved. Redistribution
// and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
// // 1. Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer in the
// documentation and/or other materials provided with the distribution.
// 3. Neither the name of the copyright holder nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission. 
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
// IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
// PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
// TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/*---
description: >
    Array.prototype.sort does not change non-existent elements to
    undefined elements, that means holes are preserved (cf. spec  text
    about [[Delete]] and sparse arrays)
author: Thomas Dahlstrom (tdahlstrom@gmail.com)
---*/

var array = ['a',,void 0];

//CHECK#1
if (array.length !== 3) {
    $ERROR('#1: array.length !== 3. Actual: ' + (array.length))
}

//CHECK#2
if (array.hasOwnProperty('0') !== true) {
    $ERROR("#2: array.hasOwnProperty('0'). Actual: " + array.hasOwnProperty('0'));
}

//CHECK#3
if (array.hasOwnProperty('1') !== false) {
    $ERROR("#3: array.hasOwnProperty('1'). Actual: " + array.hasOwnProperty('1'));
}

//CHECK#4
if (array.hasOwnProperty('2') !== true) {
    $ERROR("#4: array.hasOwnProperty('2'). Actual: " + array.hasOwnProperty('2'));
}

array.sort();

//CHECK#5
if (array.length !== 3) {
    $ERROR('#5: array.length !== 3. Actual: ' + (array.length))
}

//CHECK#6
if (array.hasOwnProperty('0') !== true) {
    $ERROR("#6: array.hasOwnProperty('0'). Actual: " + array.hasOwnProperty('0'));
}

//CHECK#7
if (array.hasOwnProperty('1') !== true) {
    $ERROR("#7: array.hasOwnProperty('1'). Actual: " + array.hasOwnProperty('1'));
}

//CHECK#8
if (array.hasOwnProperty('2') !== false) {
    $ERROR("#8: array.hasOwnProperty('2'). Actual: " + array.hasOwnProperty('2'));
}
