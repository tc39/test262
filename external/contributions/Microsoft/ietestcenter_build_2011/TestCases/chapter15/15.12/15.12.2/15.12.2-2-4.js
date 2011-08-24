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
    id: "15.12.2-2-4",

    path: "TestCases/chapter15/15.12/15.12.2/15.12.2-2-4.js",

    description: "JSON.parse - parsing an object where property name starts and ends with a null character",

    test: function testcase() {

        var result = true;

        var nullChars = new Array();
        nullChars[0] = '\"\u0000\"';
        nullChars[1] = '\"\u0001\"';
        nullChars[2] = '\"\u0002\"';
        nullChars[3] = '\"\u0003\"';
        nullChars[4] = '\"\u0004\"';
        nullChars[5] = '\"\u0005\"';
        nullChars[6] = '\"\u0006\"';
        nullChars[7] = '\"\u0007\"';
        nullChars[8] = '\"\u0008\"';
        nullChars[9] = '\"\u0009\"';
        nullChars[10] = '\"\u000A\"';
        nullChars[11] = '\"\u000B\"';
        nullChars[12] = '\"\u000C\"';
        nullChars[13] = '\"\u000D\"';
        nullChars[14] = '\"\u000E\"';
        nullChars[15] = '\"\u000F\"';
        nullChars[16] = '\"\u0010\"';
        nullChars[17] = '\"\u0011\"';
        nullChars[18] = '\"\u0012\"';
        nullChars[19] = '\"\u0013\"';
        nullChars[20] = '\"\u0014\"';
        nullChars[21] = '\"\u0015\"';
        nullChars[22] = '\"\u0016\"';
        nullChars[23] = '\"\u0017\"';
        nullChars[24] = '\"\u0018\"';
        nullChars[25] = '\"\u0019\"';
        nullChars[26] = '\"\u001A\"';
        nullChars[27] = '\"\u001B\"';
        nullChars[28] = '\"\u001C\"';
        nullChars[29] = '\"\u001D\"';
        nullChars[30] = '\"\u001E\"';
        nullChars[31] = '\"\u001F\"';

        for (var index in nullChars) {
            try {
                var obj = JSON.parse('{' + nullChars[index] + "name" + nullChars[index] + ' : "John" } ');
                result = (result && false);
            } catch (e) {
                result = (result && (e instanceof SyntaxError));
            }
        }
        return result;
    },

    precondition: function prereq() {
        return true;
    }
});