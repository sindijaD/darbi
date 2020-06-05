var fail = '<p class="fail">Eksāmens nav nokārtots!!!</p>'+'<div class="ico_fail"></div>';
var success ='<p class="success">Eksāmens nokārtots.</p>'+'<div class="ico_success"></div>';
var rating = prompt("ievadiet vērtējumu", "");
var vertejums = 'Balles:'+ rating +'- '; 

function  ievade(){
    var rating = prompt("ievadiet vērtējumu", "");
}
if(rating == null){
    document.write('ievade atcelta');
}
if ( rating <= 5 ){
    if ( rating == 1){
        document.write(vertejums + 'ļoti ļoti vāji'+ fail);
    } else if ( rating == 2){
        document.write(vertejums + 'ļoti vāji' + fail);
    } else if ( rating == 3){
        document.write(vertejums + 'vāji' + fail);
    } else if ( rating == 4){
        document.write(vertejums + 'gandrīz viduvēji'+ success);
    } else if ( rating == 5){
        document.write(vertejums + 'viduvēji'+ success);
    }
}else if ( rating > 5){
    if (rating == 6){
        document.write(vertejums + 'gandrīz labi'+ success);
    } else if ( rating == 7){
        document.write(vertejums + 'labi'+ success);
    } else if ( rating == 8){
        document.write(vertejums + 'ļoti labi'+success);
    } else if ( rating == 9){
        document.write(vertejums + 'teicami'+success);
    } else if (rating == 10){
        document.write(vertejums + 'izcili'+success);
    } else {
        document.write('nav ievadīts pareiz skaitlis'+'<div class="ico_fail"></div>');        
    }
}