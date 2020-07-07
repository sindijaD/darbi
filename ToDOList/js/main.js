if(localStorage.getItem('toDoList') == null){
    localStorage.clear();
    var toDoList = {};
}else{
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
}
/*loading un converting string from local storage*/
$('.table').hide();
const addBtn = $('#addtask'),
    taskInput =  $('#task'),
    selectionLoc = $('#taskType'),
    done = $('.done'),
    outputLoc =  $('.output'),
    tableHeader =
    '<thead class="thead-dark">'+
         '<tr>'+
            '<th scope="col">#</th>'+
            '<th class="edit134" scope="col">Type</th>'+
            '<th class="px100" scope="col">Task</th>'+
            '<th scope="col">Task created</th>'+
            '<th scope="col">Done</th>'+
            '<th scope="col">Delete</th>'+
        '</tr>'+
    '</thead>';
function refreshOutput(){   
    var count = Object.keys(toDoList).length,
        outputContent = '',
        doneClass = '',
        i = 1;        
        while (i <= count){
           if (toDoList['item'+i].done === true){
                doneClass = 'done_t'
            }else{
                doneClass = '';
            }
            /*Determine if task is accomplished.*/
            outputContent +=
            '<li class="list-group-item '+doneClass+'">'+toDoList["item"+i].task+'</li>'
            i++;
            outputLoc.html('<ul class="list-group">'+outputContent+'</ul>');
        };
};
refreshOutput();

function addValueToOb(){
    var day = new Date().getDate(),
        month = new Date().getUTCMonth(),
        year = new Date().getUTCFullYear(),
        hours = new Date().getHours(),
        minutes = new Date().getUTCMinutes(),
        count = Object.keys(toDoList).length,
        count1 = Object.keys(toDoList).length+1;
        toDoList['item0'] = {
            type: selectionLoc.val(),
            task: taskInput.val(),
            taskCreated: day+'.'+month+'.'+year,
            time:hours+':'+minutes,
            done: false
        };
        taskInput.val('');//clear input field
        /*creating object item*/
        if(count == 0 ){
            toDoList['item1'] = toDoList['item0'];
            delete toDoList['item0'];
        }else{
            toDoList['item'+count1] = toDoList['item0'];
            delete toDoList['item0'];
        }
        /*changing object keys names, to prevent overwriting*/
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    refreshOutput();
};

addBtn.click(function(){
    addValueToOb();
 });
 /*add value to object by pressing "add task" btn*/
 $(document).ready(function(){
    $("#task").keydown(function(event){
        if(event.which == 13){//13 enter key
            addValueToOb();
        }
    });
  });
 /*add value to object by pressing "enter" while input is active*/
            


 function editList(){
    var count = Object.keys(toDoList).length,
        outputContent = '',
        outputMobile = '',
        a = 1,
        i = 1;
    while (i <= count){
        if (toDoList['item'+i].done === true ){
            doneClass = 'done_t'
        }else{
            doneClass = '';
        } 
        /*Determine if task is accomplished for desktop.*/
        outputContent +=
        '<tr>'+
        '<th scope="row">'+ i +'</th>'+
        '<td onclick="showSelect('+i+')" class="type'+i+' td" >'+toDoList["item"+i].type+'</td>'+
        '<td onclick="showRename('+i+')" class="edit'+i+' '+doneClass+'">'+toDoList["item"+i].task+'</td>'+
        '<td>'+toDoList["item"+i].taskCreated+' '+toDoList["item"+i].time+'</td>'+
        '<td><div onclick="clickEvent('+i+')" class="done ico"></div></td>'+
        '<td><div onclick="deleteClick('+i+')" class="ico del"></div></td>'+
        '</tr>'
        i++;
        /*desktop view*/
    };
    while (a <= count){
        if (toDoList['item'+a].done === true ){
            doneClass = 'done_t'
        }else{
            doneClass = '';
        } 
        /*Determine if task is accomplished for mobile.*/
        outputMobile +=
        '<div class="taskItem">'+
            '<div class="taskMobile">'+a+'#<div onclick="showRename('+a+')" class="edit'+a+' '+doneClass+'">'+toDoList["item"+a].task+'</div></div>'+
            '<div class="typeMobile">Type:<div onclick="showSelect('+a+')" class="type'+a+'">'+toDoList["item"+a].type+'</div></div><div>Task created</div>'+
            '<div>'+toDoList["item"+a].taskCreated+'('+toDoList["item"+a].time+')</div>'+
            '<div class="taskControls"><div onclick="clickEvent('+a+')" class="done ico"></div><div onclick="deleteClick('+a+')" class="ico del"></div></div>'+
            '</div>'
            a++;
        /*mobile view*/
    };
    outputLoc.html('<table class="table">'+tableHeader+'<tbody>'+outputContent+'</tbody></table>'+outputMobile);
 };



 function clickEvent(a){
     if( toDoList['item'+a].done === false){
        toDoList['item'+a].done = true;
     }else{
        toDoList['item'+a].done = false;
        toDoList.set
     }
     localStorage.setItem('toDoList', JSON.stringify(toDoList));
    editList();  
 };
 /*finishes task*/

 function deleteClick(a){
    //delete toDoList['item'+a];   //only can delete last task
 };


 /*delete task*/
 function rename(event, a) {
    var x = event.which;
    if(x == 13 ){
        toDoList['item'+a].task = $('.editV'+a).val();
        editList(); 
    };
  }
 function showRename(a){
     $('<input onkeypress="rename(event, '+a+')" class="input editV'+a+' "value="'+toDoList['item'+a].task+'" type="text">').replaceAll( ".edit"+a );
 }
 /*Rename task*/
 $('#editList').click(function() {
    $('.nav-link').removeClass('active');
    $('#editList').addClass('active');
    $(' #downPage, .list-group, .add, #aboutPage').hide();
    $('.output, .table').show();
    editList();  
  });
$('#create_list').click(function () {
    $('.nav-link').removeClass('active');
    $('#create_list').addClass('active');
    $('#downPage, .table, #aboutPage').hide();
    $('.output, .add').show();
    refreshOutput();
});
$('#DownPage').click(function(){
    $('.nav-link').removeClass('active');
    $('#DownPage').addClass('active');
    $('.table, .output, #aboutPage, .add ').hide();
    $('#downPage').show();
    refreshOutput();
});
$('#AboutPage').click(function(){
    $('.nav-link').removeClass('active');
    $('#AboutPage').addClass('active');
    $('.table, .output, #downPage,  .add').hide();
    $('#aboutPage').show();
    refreshOutput();
});
function showSelect(i){
    var selector = $( '#taskType' ).clone();
    $('.type'+i).html(selector);
    /*clone selection from create list page*/
    $('.type'+i+' .form-control').show();
    $('.type'+i).prop("onclick", null).off("click");
    /*preventing flickering */
    $('.type'+i+' .form-control').attr("onchange", "changeVal("+i+")");
}
/*creating selection in Edit list*/
function changeVal(i){
    toDoList['item'+i].type = $('.type'+i+' .form-control').val();
    editList();  
}
/* changes value  in object and rewrites htm*/



 /*
 var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() == 769 || $(this).width() == 767) {
      editList();
      console.log('works');
  }
});
refresh page if changing with (kinda works)need fix

    8 julijs  11.30 
 */