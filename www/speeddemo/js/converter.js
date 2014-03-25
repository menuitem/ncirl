var Converter = (function(measure) {
    // Private stuff up here
    var converterValue = 2.2;
    // temperature
    var kelvinConverter = 273.15;
    var farenheitConverter = 1.8; // 9/5
    var notANumber = function(num){
        if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
    };
    // Public methods here
    return {

        convertFromPoundsToKIlo: function(weight) {
            notANumber(weight);
            var num = parseInt(weight);
            num = num / converterValue;
            return Math.round(num);
       -c },
        convertFromImperialToMetric: function(weight) {
            notANumber(weight);
            return weight / converterValue;
        },

        convertFromMetricToImperial: function(weight) {
            notANumber(weight);
            return weight * converterValue;
        },
        convertFromCelciusToKelvin: function(celcius){
            notANumber(celcius);
            return celcius + kelvinConverter
        },
        convertFromKelvinToCelcius: function(kelvin){
            notANumber(kelvin);
            return kelvin - kelvinConverter
        },
        convertCelciusToFarenheit: function(celcius){
            notANumber(celcius);
            return farenheitConverter * celcius + 32
        },
        convertFarenheitToCelcius: function(f){
            notANumber(f);
            return (1/farenheitConverter)*(f-32)
        },
        convertFarenheitToKelvin: function(f){
            notANumber(f);
            var convertFarenheitToCelcius = function(f){
                return (1/farenheitConverter)*(f-32)
            },
            convertFromCelciusToKelvin = function(celcius){
               notANumber(celcius);
               return celcius + kelvinConverter
            };
            return Math.round(convertFromCelciusToKelvin(convertFarenheitToCelcius(f)));
        }

    }
}())