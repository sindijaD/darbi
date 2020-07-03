var toDoList = {};
$('.table').hide();


const addBtn = $('#addtask'),
    taskInput =  $('#task'),
    selectionLoc = $('#taskType'),
    done = $('.done'),
    outputLoc =  $('.list-group');

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
            outputLoc.html(outputContent);
        };
};
addBtn.click(function(){
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

    refreshOutput();
 });

 function editList(){
    var count = Object.keys(toDoList).length,
        outputContent = '',
        i = 1;
    while (i <= count){
        if (toDoList['item'+i].done === true ){
            doneClass = 'done_t'
        }else{
            doneClass = '';
        } 
        /*Determine if task is accomplished.*/
        outputContent +=
        '<tr>'+
        '<th scope="row">'+ i +'</th>'+
        '<td>'+toDoList["item"+i].type+'</td>'+
        '<td onclick="showRename('+i+')" class="edit'+i+' '+doneClass+'">'+toDoList["item"+i].task+'</td>'+
        '<td>'+toDoList["item"+i].taskCreated+' '+toDoList["item"+i].time+'</td>'+
        '<td><div onclick="clickEvent('+i+')" class="done ico"></div></td>'+
        '<td><div onclick="deleteClick('+i+')" class="ico del"></div></td>'+
        '</tr>'
        i++;
        $('#editOutputLoc').html(outputContent);
    };
 };
 function clickEvent(a){
    toDoList['item'+a].done = true;
    editList();  
 };

 /*finishes task*/

 function deleteClick(a){
    //delete toDoList['item'+a];   //only can delete last task
    
 };
 /*delete task*/
 function rename(event, a) {
    var x = event.which;
    if(x == 13){
        toDoList['item'+a].task = $('.editV'+a).val();
        editList();  
    };
  }

 function showRename(a){
     $('<td><input onkeypress="rename(event, '+a+')" class="input editV'+a+' "value="'+toDoList['item'+a].task+'" type="text"></td>').replaceAll( ".edit"+a );
     console.log('works');
 }
 /*Rename task*/
 $('#editList').click(function() {
    $('.nav-link').removeClass('active');
    $('#editList').addClass('active');
    $('select, input, #addtask, .list-group').hide();
    $('.table').show();
    editList();  
  });
$('#create_list').click(function () {
    $('.nav-link').removeClass('active');
    $('#create_list').addClass('active');
    $('select, input, #addtask, .list-group').show();
    $('.table').hide();
    refreshOutput();
}); 
console.log(toDoList);






 /*
    toDoList['item'+count] = toDoList['item0'];
    8 julijs  11.30 
 */