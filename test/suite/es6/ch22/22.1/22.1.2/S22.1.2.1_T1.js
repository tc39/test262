/**
 * @description Testing Array.from when passed a String
 */

runTestCase(function () {
  /*! http://mths.be/array-from v0.1.0 by @mathias */
  if (!Array.from) {
    (function() {
      'use strict';
      var defineProperty = (function() {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch(error) {}
        return result;
      }());
      var toLength = function(value) {
        var number = Number(value);
        var length;
        if (number != number) { // better `isNaN`
          length = 0;
        } else if (number == 0 || !isFinite(number)) {
          length = number;
        } else {
          length = (number < 0 ? -1 : +1) * Math.floor(Math.abs(number));
        }
        if (length <= 0) {
          return 0;
        }
        return Math.min(length, 0x1FFFFFFFFFFFFF);
      };
      var isConstructor = function(Constructor) {
        try {
          new Constructor();
          return true;
        } catch(_) {
          return false;
        }
      };
      var from = function(arrayLike) {
        var Me = this;
        if (arrayLike == null) {
          throw TypeError();
        }
        var items = Object(arrayLike);
        var mapFn = arguments.length > 1 ? arguments[1] : undefined;
        var T = arguments.length > 2 ? arguments[2] : undefined;
        var mapping = true;
        if (mapFn === undefined) {
          mapping = false;
        } else if (typeof mapFn != 'function') {
          throw TypeError();
        }
        var len = toLength(items.length);
        var A = isConstructor(Me) ? new Me(len) : new Array(len);
        var k = 0;
        var kValue;
        var mappedValue;
        while (k < len) {
          if (k in items) { // note: `HasProperty` (not `HasOwnProperty`)
            kValue = items[k];
            mappedValue = mapping ? mapFn.call(T, kValue, k, items) : kValue;
            if (defineProperty) {
              defineProperty(A, k, {
                'value': mappedValue,
                'writable': true,
                'enumerable': true,
                'configurable': true
              });
            } else {
              A[k] = mappedValue;
            }
          }
          ++k;
        }
        A.length = len;
        return A;
      };
      if (defineProperty) {
        defineProperty(Array, 'from', {
          'value': from,
          'configurable': true,
          'writable': true
        });
      } else {
        Array.from = from;
      }
    }());
  }

<<<<<<< HEAD
  var arrLikeSource = 'testValue',
=======
  var arrLikeSource = 'testValue';
>>>>>>> 4ef71d24b00df8cc1eae9afbb20a2179c206128f
      testArr = Array.from(arrLikeSource);

  if (testArr.length != 9) {
    return false;
  }

  return true;

});
