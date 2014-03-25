describe("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect(Converter.convertFromPoundsToKIlo(2.2)).toBe(1);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Converter.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
    })
    it ("should convert celcius to kelvin", function(){
    	expect(Converter.convertFromCelciusToKelvin(-273.15)).toBe(0);
    })
    it ("should convert Kelvin to Celcius", function(){
    	expect(Converter.convertFromKelvinToCelcius(0)).toBe(-273.15);
    })
    it ("should convert Celcius to Faranheit", function(){
    	expect(Converter.convertCelciusToFarenheit(5)).toBe(41);
    })
    it ("should convert Faranheit to Celcius", function(){
    	expect(Converter.convertFarenheitToCelcius(5)).toBe(-15);
    })
    it ("should convert Faranheit to Kelvin", function(){
    	expect(Converter.convertFarenheitToKelvin(0)).toBe(255);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Converter.convertFarenheitToKelvin("hello")}).toThrow(new Error("Not a number"))
    })
})