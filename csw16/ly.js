let year=document.getElementById("year");
let msg=document.getElementById("message");
function leapYear(){
	console.log(year.value);
	if(year.value<0)
		msg.innerText="Ivalid Number";
	else if(year.value%400==0){
		msg.innerText="Yes,"+year.value+" is a leap year."
	}
	else if(year.value%100==0){
		msg.innerText="No,"+year.value+" is not a leap year."
	}
	else if(year.value%4==0)
        	pmsg.innerText="Yes,"+year.value+" is a leap year."
	else
        	msg.innerText="No,"+year.value+" is not a leap year."
}