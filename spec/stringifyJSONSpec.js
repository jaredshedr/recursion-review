// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  describe('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      it(JSON.stringify(test), function() {
        var expected = JSON.stringify(test);
        var result = stringifyJSON(test);
        expect(result).to.equal(expected);
      });
    });
  });


  describe('Should not stringify', function() {
    unstringifiableValues.forEach(function(obj) {
      it(JSON.stringify(obj), function() {
        var expected = JSON.stringify(obj);
        var result = stringifyJSON(obj);
        expect(result).to.equal(expected);
      });
    });
  });
});
