var Converter = (function () {
	
	var converterValue = 2.2;

	return{
		convertFromImperialToMetric: function(weight) {
	        var num = parseFloat(weight);
	        if (isNaN(num) == true) {
	        	throw new Error("Not a number");
	        }
	        return num / converterValue;
	    },
	    convertFromMetricToImperial: function(weight) {
	        var num = parseFloat(weight);
	        if (isNaN(num) == true) {
	        	throw new Error("Not a number");
	        }
	        return num * converterValue;
	    }
	}
	
}());
var input1= document.getElementsByTagName('input')[0];
var input2= document.getElementsByTagName('input')[1];
	input1.addEventListener('click', function(){
		input2.value=null;
	});
	input2.addEventListener('click', function(){
		input1.value=null;
	});	
b = document.getElementsByTagName('button')[0];
b.addEventListener('click', function(e){
	e.preventDefault();
	n1 = parseFloat(input1.value);
	n2 = parseFloat(input2.value);
if (!isNaN(n1) && isNaN(n2)){
	var n= Converter.convertFromImperialToMetric(n1);
	document.getElementById('number2').value=n;
}
if (!isNaN(n2) && isNaN(n1)){
	var n= Converter.convertFromMetricToImperial(n2);
	document.getElementById('number1').value=n;
}
})