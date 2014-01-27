// bug_596_1.js - Tests for the following bug:
//              <https://bugs.ecmascript.org/show_bug.cgi?id=596>
//
//      Written in 2014 by Thomas Dahlstrom tdahlstrom@gmail.com
//
//      To the extent possible under law, the author(s) have dedicated all
//      copyright and related and neighboring rights to this software to the
//      public domain worldwide. This software is distributed without any
//      warranty.
//
//      You should have received a copy of the CC0 Public Domain Dedication
//      along with this software. If not, see
//      <http://creativecommons.org/publicdomain/zero/1.0/>.

/**
 * @path es6/bug_596_1.js
 * @description The SortCompare abstract operation calls ToString() for
 *              identical elements (step 14/15)
 * @author Thomas Dahlstrom (tdahlstrom@gmail.com)
 */

var counter = 0;
var object = {
    toString: function(){
        counter++;
        return "";
    }
};

[object, object].sort();
if (counter < 2) {
  // sort calls ToString() for each element at least once
  $ERROR('#1: [object, object].sort(); counter < 22. Actual: ' + (counter));
}

