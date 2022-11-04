$('#check').click(function(){
    let ly=$('#year').val();
    if(ly<0)
		$('#msg').text("Ivalid Number")
	else if(ly%400==0){
		$('#msg').text("Yes,"+year.value+" is a leap year.")
	}
	else if(ly%100==0){
		$('#msg').text("No,"+year.value+" is not a leap year.")
	}
	else if(ly%4==0)
        $('#msg').text("Yes,"+year.value+" is a leap year.")
	else
        $('#msg').text("No,"+year.value+" is not a leap year.")
})