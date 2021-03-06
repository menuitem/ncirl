window._skel_config = {
	prefix: 'css/style',
	preloadStyleSheets: true,
	resetCSS: true,
	boxModel: 'border',
	grid: { gutters: 30 },
	breakpoints: {
		wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
		narrow: { range: '481-1199', containers: 960 },
		narrower: { range: '481-960', containers: 'fluid' },
		mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true, gutters: 20 } }
	}
};
document.addEventListener("DOMContentLoaded", function(event) {
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
	document.getElementById('number2').value = (Converter.convertFromImperialToMetric(n1));
}
if (!isNaN(n2) && isNaN(n1)){
	document.getElementById('number1').value = (Converter.convertFromMetricToImperial(n2));
}
});	
  });
