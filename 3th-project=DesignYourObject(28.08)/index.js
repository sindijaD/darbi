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
    textureLoc = doc.querySelector('.selection'),
    s_cupboardPrice = doc.querySelector('.s_cupboardPrice');

var cupboard = {
    platums: 300,
    height: 120,
    texture:'Yellow',
    drawers: 1,
    price: 0
};
function YourPrice(){
    var squarePrice = cupboard.platums*cupboard.height/100;
    switch (cupboard.drawers){
        case '0' :var drawerPrice = 0.01;break;
        case '1' :var drawerPrice = 49;break;
        case '2' :var drawerPrice = 99;break;
        case '3' :var drawerPrice = 149;break;
        default:console.log('drawer price calculation error');
    }
    switch(cupboard.texture){
        case 'Yellow':var texturePrice = squarePrice*0.03 ;break;
        case 'Grey'  :var texturePrice = squarePrice*0.06;break;
        case 'Dark'  :var texturePrice = squarePrice*0.1;break;
        default:console.log('texture price calculation error');
    }
    cupboardPrice = squarePrice + drawerPrice + texturePrice;
    cupboard.price = cupboardPrice;
}
function refresh(){
    YourPrice();
    var mainOutput = '.table{background-color: #913333;width:'+ cupboard.platums +'px;height:'+ cupboard.height +'px;}';
    S_with.innerHTML = 'Width: '+cupboard.platums+' cm';
    S_height.innerHTML = 'Height: '+cupboard.height+' cm';
    S_texture.innerHTML = 'Chosen texture: '+cupboard.texture;
    S_drawerCount.innerHTML = 'drawer cont: '+ cupboard.drawers;
    s_cupboardPrice.innerHTML = 'Your orders price: ' + cupboard.price;
    switch(cupboard.texture){
        case   'Dark':textureLoc.style.backgroundImage = "url(ico/texture1.jpeg)";table.style.backgroundImage = "url(ico/texture1.jpeg)";break;
        case   'Grey':textureLoc.style.backgroundImage = "url(ico/texture2.jpg)";table.style.backgroundImage = "url(ico/texture2.jpg)";break;
        case 'Yellow':textureLoc.style.backgroundImage = "url(ico/texture3.jpg)";table.style.backgroundImage = "url(ico/texture3.jpg)";break;
        default:console.log('texture not selected');
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
    switch (cupboard.drawers){
        case"0":table.innerHTML = '<div class="doors"></div>';break;
        case"1":table.innerHTML = '<div class="doors"></div>' + drawerOuput;break;
        case"2":table.innerHTML = '<div class="doors"></div>' + drawerOuput+drawerOuput;break;
        case"3":table.innerHTML = '<div class="doors"></div>' + drawerOuput+drawerOuput+drawerOuput;break;
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
addDrawers();
refresh();
