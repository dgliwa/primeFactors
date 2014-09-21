describe("Prime Factor Analyzer", function () {
    beforeEach(function () {

    });

    it("returns empty when given 1", function() {
        var expected = [];

        expect(primeFactors(1)).toEqual(expected);
    });

    it("returns [2] when given 2", function() {
        var expected = [2];

        expect(primeFactors(2)).toEqual(expected);
    });

    it("returns [3] when given 3", function() {
        var expected = [3];

        expect(primeFactors(3)).toEqual(expected);
    });

    it("returns [2,2] when given 4", function() {
        var expected = [2,2];

        expect(primeFactors(4)).toEqual(expected);
    });

    it("returns [5] when given 5", function() {
        var expected = [5];

        expect(primeFactors(5)).toEqual(expected);
    });
    it("returns [2,2,2,3,5,17] when given 2040", function(){
      var expected = [2,2,2,3,5,17];

      expect(primeFactors(2040)).toEqual(expected);
    })
});
