const   input = document.querySelector('#range'),
        fail = '<p>Eksāmens nav nokārtots!!!</p>'+ '<div class="ico_fail"></div>',
        success ='<p>Eksāmens nokārtots.</p>'+'<div class="ico_success"></div>',
        //rezultāti
        score1  = ': ļoti ļoti vāji'+ fail,
        score2  = ': ļoti vāji' + fail,
        score3  = ': vāji' + fail,
        score4  = ': gandrīz viduvēji'+ success,
        score5  = ': viduvēji'+ success,
        score6  = ': gandrīz labi'+ success,
        score7  = ': labi'+ success,
        score8  = ': ļoti labi'+success,
        score9  = ': teicami'+success,
        score10 = ': izcili'+success;

input.addEventListener('input', 
    function(e){
        rating2(e.target.value);
    }  
);
function rating2(rating){
    const score = document.querySelector('.score');
    if ( rating <= 5 ){
        if ( rating == 1){
            score.innerHTML = rating + score1;
        } else if ( rating == 2){
            score.innerHTML = rating + score2;
        } else if ( rating == 3){
            score.innerHTML = rating + score3
        } else if ( rating == 4){
            score.innerHTML = rating + score4;
        } else if ( rating == 5){
            score.innerHTML = rating + score5;
        }
    }else if ( rating > 5){
        if (rating == 6){
            score.innerHTML = rating + score6;
        } else if ( rating == 7){
            score.innerHTML = rating + score7;
        } else if ( rating == 8){
            score.innerHTML = rating + score8;
        } else if ( rating == 9){
            score.innerHTML = rating + score9;
        } else if (rating == 10){
            score.innerHTML = rating + score10;
        } else {
            score.innerHTML = 'klūda';       
        }
    }

}

