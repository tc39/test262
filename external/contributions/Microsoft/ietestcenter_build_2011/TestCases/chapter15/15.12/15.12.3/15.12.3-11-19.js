/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

ES5Harness.registerTest({
    id: "15.12.3-11-19",

    path: "TestCases/chapter15/15.12/15.12.3/15.12.3-11-19.js",

    description: "JSON.stringify - stringifying an object where property name starts and ends with the union of all null character (The abstract operation Quote(value) step 2.c)",

    test: function testcase() {

        var result = true;

        var expectedNullChars = new Array();
        expectedNullChars[0] = "\\u0000";
        expectedNullChars[1] = "\\u0001";
        expectedNullChars[2] = "\\u0002";
        expectedNullChars[3] = "\\u0003";
        expectedNullChars[4] = "\\u0004";
        expectedNullChars[5] = "\\u0005";
        expectedNullChars[6] = "\\u0006";
        expectedNullChars[7] = "\\u0007";
        expectedNullChars[8] = "\\b";
        expectedNullChars[9] = "\\t";
        expectedNullChars[10] = "\\n";
        expectedNullChars[11] = "\\u000b";
        expectedNullChars[12] = "\\f";
        expectedNullChars[13] = "\\r";
        expectedNullChars[14] = "\\u000e";
        expectedNullChars[15] = "\\u000f";
        expectedNullChars[16] = "\\u0010";
        expectedNullChars[17] = "\\u0011";
        expectedNullChars[18] = "\\u0012";
        expectedNullChars[19] = "\\u0013";
        expectedNullChars[20] = "\\u0014";
        expectedNullChars[21] = "\\u0015";
        expectedNullChars[22] = "\\u0016";
        expectedNullChars[23] = "\\u0017";
        expectedNullChars[24] = "\\u0018";
        expectedNullChars[25] = "\\u0019";
        expectedNullChars[26] = "\\u001a";
        expectedNullChars[27] = "\\u001b";
        expectedNullChars[28] = "\\u001c";
        expectedNullChars[29] = "\\u001d";
        expectedNullChars[30] = "\\u001e";
        expectedNullChars[31] = "\\u001f";

        for (var index in expectedNullChars) {

            var str = JSON.stringify({ "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000A\u000B\u000C\u000D\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001Fname\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000A\u000B\u000C\u000D\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F": "John" });
            result = (result && str.indexOf(expectedNullChars[index]) !== -1 && str.indexOf(expectedNullChars[index]) !== -1);
        }
        return result;
    },

    precondition: function prereq() {
        return true;
    }
});
