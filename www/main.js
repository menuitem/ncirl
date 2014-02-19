b=document.getElementsByTagName('button')[0];
b.addEventListener('click', function(e){
	e.preventDefault();
n1=parseFloat(document.getElementsByTagName('input')[0].value);
n2=parseFloat(document.getElementsByTagName('input')[1].value);
console.log(document.getElementById('score').value=n1+n2);
document.getElementById('score').value=n1+n2;
})