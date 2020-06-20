var doc = document,
    table = doc.querySelector('.table'),
    style = doc.querySelector('style'),
    higherBtn = doc.querySelector('.up'),
    witherBtn = doc.querySelector('.width'),
    addSectionBtn = doc.querySelector('.right'),
    addDrawerBtn = doc.querySelector('.addDrawers'),
    reduceWidth = doc.querySelector('.reduced'),
    S_with = doc.querySelector('.S_with'),
    S_height = doc.querySelector('.S_height'),
    S_texture = doc.querySelector('.S_texture'),
    S_drawerCount = doc.querySelector('.S_drawerCount'),
    textureLoc = doc.querySelector('.selection');

var cupboard = {
    platums: 60,
    height: 120,
    texture:'light',
    drawers: 0,
};

function refresh(){;
    var mainOutput = '.table{background-color: #913333;width:'+ cupboard.platums +'px;height:'+ cupboard.height +'px;}';
    S_with.innerHTML = 'Width: '+cupboard.platums+' cm';
    S_height.innerHTML = 'Height: '+cupboard.height+' cm';
    S_texture.innerHTML = 'Chosen texture: '+cupboard.texture;
    S_drawerCount.innerHTML = 'drawer cont: '+ cupboard.drawers;
    switch(cupboard.texture){
        case   'Dark':textureLoc.style.backgroundImage = "url(ico/texture1.jpeg)";break;
        case   'Grey':textureLoc.style.backgroundImage = "url(ico/texture2.jpg)";break;
        case 'Yellow':textureLoc.style.backgroundImage = "url(ico/texture3.jpg)";break;
        default:console.log('error');
    }
    style.innerHTML = mainOutput;
}
function addWidth(){
    var sum = cupboard.platums + 60;
    cupboard.platums = sum;
    if (cupboard.platums > 480){
        cupboard.platums= 480;
    }
    refresh();
};
function reduce(){
    var sum = cupboard.platums - 60;
    cupboard.platums = sum;
    if (cupboard.platums < 60){
        cupboard.platums= 60;
    }
    refresh();
};
function addHight(){
    var sum = cupboard.height + 10;
    cupboard.height = sum;
    if (cupboard.height > 240){
        cupboard.height=240;
    }
    refresh();
}
function addDrawers(){
    var drawerOuput = '<div class="drawers"></div>';
    drawersValue = doc.querySelector('#addDrawers').value;
    cupboard.drawers = drawersValue ;     
    console.log(cupboard);
    switch (cupboard.drawers){
        case"0":table.innerHTML = '';break;
        case"1":table.innerHTML = drawerOuput;break;
        case"2":table.innerHTML = drawerOuput+drawerOuput;break;
        case"3":table.innerHTML = drawerOuput+drawerOuput+drawerOuput;break;
        default:console.log('error');
    };
    refresh();
}
function ReduceHight(){
    var sum = cupboard.height - 10;
    cupboard.height = sum;
    if (cupboard.height < 120){
        cupboard.height= 120;
    }
    refresh();
}
/*texture detect*/
function submitD(){
    cupboard.texture ='Dark';
    refresh();
}function submitG(){
    cupboard.texture ='Grey';
    refresh();
}function submitY(){
    cupboard.texture ='Yellow';
    refresh();
}


