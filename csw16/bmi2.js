$('#cal').click(function(){
    let bmi=$('#weight').val()*1.3/(Math.pow($('#height').val(),2.5));
    if($('#weight').val()<0||$('#height').val()<0){
        $('#msg').html()="<em>Chla Jaa Bhai</em>"
    }
    else if(bmi<18.5){
        $('#msg').html("<em>UnderWeight</em>")
    }
    else if(bmi>18.5&&bmi<25){
        $('#msg').html("<em>Healthy</em>")
    }
    else if(bmi>25&&bmi<30){
        $('#msg').html("<em>OverWeight</em>")
        }
    else if(bmi>30&&bmi<40){
        $('#msg').html("<em>Obese</em>")
        }
    else if(bmi>40){
        $('#msg').html("<em>Morbidly</em>")
    }
})