$('h1').css('color',"red");
function bmi(){
	let w=document.getElementById('weight').value;
	let h=document.getElementById('height').value*0.3;
	let bmi=(1.3*w)/Math.pow(h,2.5);
	let value=document.getElementById('msg');
	if(w<0||h<0){
		value.innerHTML="<em>Chla Jaa Bhai</em>"
	}
	else if(bmi<18.5){
		value.innerHTML="<em>UnderWeight</em>"
	}
	else if(bmi>18.5&&bmi<25){
		value.innerHTML="<em>Healthy</em>"
	}
	else if(bmi>25&&bmi<30){
		value.innerHTML="<em>OverWeight</em>"
	}
	else if(bmi>30&&bmi<40){
		value.innerHTML="<em>Obese</em>"
	}
	else if(bmi>40){
		value.innerHTML="<em>Morbidly</em>"
	}
	
}