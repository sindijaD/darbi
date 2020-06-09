const   input = document.querySelector('#range'),
        fail = '<p>Eksāmens nav nokārtots!!!</p>'+ '<div class="ico_fail"></div>',
        success ='<p>Eksāmens nokārtots.</p>'+'<div class="ico_success"></div>',
        //rezultāti
        score1  = ': ļoti ļoti vāji</p>'+ fail,
        score2  = ': ļoti vāji</p>' + fail,
        score3  = ': vāji</P>' + fail,
        score4  = ': gandrīz viduvēji</p>'+ success,
        score5  = ': viduvēji</p>'+ success,
        score6  = ': gandrīz labi</p>'+ success,
        score7  = ': labi</p>'+ success,
        score8  = ': ļoti labi</p>'+success,
        score9  = ': teicami</p>'+success,
        score10 = ': izcili</p>'+success;

input.addEventListener('input', 
    function(e){
        rating2(e.target.value);
    }  
);
function rating2(rating){
    const score = document.querySelector('.score');
    switch(rating){
        case'1':score.innerHTML = '<p>'+rating + score1;break;
        case'2':score.innerHTML = '<p>'+rating + score2;break;
        case'3':score.innerHTML = '<p>'+rating + score3;break;
        case'4':score.innerHTML = '<p>'+rating + score4;break;
        case'5':score.innerHTML = '<p>'+rating + score5;break;
        case'6':score.innerHTML = '<p>'+rating + score6;break;
        case'7':score.innerHTML = '<p>'+rating + score7;break;
        case'8':score.innerHTML = '<p>'+rating + score8;break;
        case'9':score.innerHTML = '<p>'+rating + score9;break;
        case'10':score.innerHTML = '<p>'+rating + score10;break;
        default:'klūda';
    };
};
/*
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
*/

