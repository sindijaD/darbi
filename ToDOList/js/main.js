/*$(function(){
    $('.btn-success').css({color:'red'});

});

const math = (x, y) => x + y;

$('#input').onchange(function(){
    $('#input').value;
});
$('.container-sm').append('sveicināts'+ ievade);

outputLoc.append(
        '<tr>'+
        '<th>'+toDoList.item0.type+'</th>'+
        '<th>'+toDoList.item0.task+'</th>'+
        '<th>'+toDoList.item0.taskCreated+'<br>'+toDoList.item0.time+'</th>'+
        '<th><div class="ico del"></div></th>'+
        '</tr>'
    );
                console.log(outputContent)


izvade jānotiek no object
*/

var toDoList = {};

const addBtn = $('#addtask'),
    taskInput =  $('#task'),
    selectionLoc = $('#taskType'),
    done = $('.done'),
    outputLoc =  $('tbody');

function refreshOutput(){   
    var count = Object.keys(toDoList).length,
        outputContent = '',
        doneClass = '',
        i = 1;        
        while (i <= count){
            if (toDoList['item'+i].done === true){
                doneClass = 'class="done_t"'
                console.log(doneClass);
            }else{
                doneClass = '';
            }   
            /*Determine if task is accomplished.*/
            outputContent +='<tr>'+
            '<th>'+[i]+'</th>'+
            '<th>'+toDoList["item"+i].type+'</th>'+
            '<th '+doneClass+'>'+toDoList["item"+i].task+'</th>'+
            '<th>'+toDoList["item"+i].taskCreated+'<br>'+toDoList["item"+i].time+'</th>'+
            '<th onclick="clickEvent('+i+')" ><div class="done ico"></div></th>'+            
            '<th><div class="ico del"></div></th>'+
            '</tr>';
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

        console.log(toDoList);
    refreshOutput();
 });

 function clickEvent(a){
    toDoList['item'+a].done = true;
    console.log('task works');
    refreshOutput();
    console.log(toDoList);
 };
 /*
    toDoList['item'+count] = toDoList['item0'];
    8 julijs  11.30 
 */