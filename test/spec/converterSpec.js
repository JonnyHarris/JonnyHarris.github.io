describe("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect(Converter.convertFromPoundsToKIlo(2.2)).toBe(1);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Converter.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
    })
})