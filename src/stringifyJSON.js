// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var isNum = function (elem) {
    return typeof elem === 'number';
  }

  var isBoolOrNull = function (elem) {
    return ((elem === true) || (elem === false) || (elem === null));
  }

  var isString = function (elem) {
    return typeof elem === 'string';
  }

  var isArray = function (elem) {
    return (Array.isArray(elem));
  }

  var issaFunction = function (elem) {
    return typeof elem === 'function';
  }

  if (isNum(obj)) {
    return '' + obj;
  }

  if (isString(obj)) {
    return '"' + obj + '"'
  }

  if (isBoolOrNull(obj)) {
    return '' + obj
  }

  if (obj === undefined) {
    return obj;
  }



  if ((typeof obj === 'object') && (Array.isArray(obj) === true) ) {

    if (obj.length === 0) {
        return '[]';
      }

      var arrayValue = '[';

      obj.forEach(function (elem) {
        arrayValue += stringifyJSON(elem);
        if (obj.indexOf(elem) !== obj.length - 1) {
          arrayValue += ','
        }
      });

      arrayValue += ']';

      return arrayValue;

  } else {
    if(Object.entries(obj).length === 0) {
      return '{}';
    }

    var keyValuePair = '{';

    var commaRemove = false;

      for (var key in obj) {
        if (!issaFunction(obj[key])) {
          if (stringifyJSON(obj[key]) !== undefined) {
            commaRemove = true;
            keyValuePair += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
          }
        }
      }

      if (commaRemove) {
        keyValuePair = keyValuePair.substring(0, keyValuePair.length - 1);
      }

    return keyValuePair + '}';
  }

};
