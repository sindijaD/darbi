var produkti =[
    'maize',
    'piens',
    'ūdens',
    'milte',
    'olas',
    'cukurs',
    'sāls',
    'cepamais pulveris',
    'ievārijums',
    'iebiezoinātais piens',
    'desa',
    'pipari'
];

var loc = document.getElementById("list"),
    selectLoc = document.querySelector("#deleteli"),
    btn = document.getElementById('btn');
  var  dispAmount = produkti.length;
  function clearList(){
    produkti = [];
    alert('List is cleared')
    ListOutput();
    loc.innerHTML = '' ;
}
  function addToArray() {
    newElement = document.getElementById('addList').value;
    if(!newElement == !undefined || newElement == null){//prevent user from adding undefined
        console.log('cant add empty value!!!');
    }else if(1==2){
        // to do ,array filter
        console.log('test1')
    }
    else{
        produkti.push(newElement);
        alert('"'+ newElement +'" added to list');
        ListOutput();
        document.getElementById("addList").value = "";//clear input value
    }
  } function delFunction(del){
      delete produkti[del];

  }


  function delfunction(){///delete function
        var delValue = selectLoc.options[selectLoc.selectedIndex].value;//take value from selection
        delFunction(delValue);
        console.log(produkti[delValue]);
  }




function ListOutput(){
    var dispAmount = produkti.length;//getting values for double preventer
    dispAmount = document.getElementById('dispAmount').value;
/*prevent user from entering greater value then array holds and
leaving dispAmount without value*/
    if( !dispAmount == !undefined || !dispAmount == Number || dispAmount <= 0){
        dispAmount = produkti.length;
    }else if (dispAmount > produkti.length){
        alert('You entered value greater then list holds');
        dispAmount = produkti.length;
    };
    var prevent = document.querySelector('.prodList'),
        /*creating <ul>*/
        newUl = document.createElement('ul'),
        sectionLoc = document.querySelector('list'); 
    loc.appendChild(newUl, sectionLoc).classList.add("prodList");
    /*adding <li> and its content to <ul> and */
    for (i = 0; i < dispAmount; i++) {
        var newLi = document.createElement('li');
        var Content = document.createTextNode( produkti[+i]);
        newLi.appendChild(Content);
        var currentLi = document.querySelector('list'); 
        const ulLoc = document.querySelector(".prodList");
        ulLoc.appendChild(newLi, currentLi).classList.add('item'+i);
        /*creating  delete menu*/
        var deloptions = document.createElement('option');
        var delOpContent = document.createTextNode( produkti[+i]);
        deloptions.appendChild(delOpContent);
        selectLoc.appendChild(deloptions, selectLoc).setAttribute("value", ""+ +i +"");/*give value for delete function*/
    }
    
    
    if(dispAmount > produkti.length || !dispAmount == undefined ){
        dispAmount = produkti.length;
    }
    if (prevent == null){//prevent user from creating duplicated lists.
        btn.innerText = 'Refresh list';
    }else{
        loc.innerHTML = null;
        selectLoc.innerHTML = null;
        btn.innerText = 'Show list';
        ListOutput();
        document.getElementById("dispAmount").value = "";//clear input value
    }
};
