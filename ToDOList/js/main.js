if (localStorage.getItem('toDoList') == null) {
    localStorage.clear();
    var toDoList = {};
} else {
    toDoList = JSON.parse(localStorage.getItem('toDoList'));
}
/*loading un converting string from local storage*/
$('.table').hide();
const addBtn = $('#addtask'),
    taskInput = $('#task'),
    selectionLoc = $('#taskType'),
    done = $('.done'),
    outputLoc = $('.output'),
    downloadBtn = $('#downloadList'),
    tableHeader =
        '<thead class="thead-dark">' +
        '<tr>' +
        '<th scope="col">#</th>' +
        '<th class="edit134" scope="col">Type</th>' +
        '<th class="px100" scope="col">Task</th>' +
        '<th scope="col">Task created</th>' +
        '<th scope="col">Done</th>' +
        '<th scope="col">Delete</th>' +
        '</tr>' +
        '</thead>',
    noList = '<h2>There is no tasks in list<h2>' ;
/*btn locations and inputs*/
function refreshOutput() {
    var count = Object.keys(toDoList).length,
        outputContent = '',
        doneClass = '',
        i = 1;
    while (i <= count) {
        if (toDoList['item' + i].done === true) {
            doneClass = 'done_t';
        } else {
            doneClass = '';
        }
        /*Determine if task is accomplished.*/
        outputContent +=
            '<li onclick="clickEvent('+i+')" class="list-group-item ' + doneClass + '">' + toDoList["item" + i].task + '</li>'
        i++;
        outputLoc.html('<ul class="list-group">' + outputContent + '</ul>');
    };
};
refreshOutput();

function addValueToOb() {
    var day = new Date().getDate(),
        month = new Date().getUTCMonth(),
        year = new Date().getUTCFullYear(),
        hours = new Date().getHours(),
        minutes = new Date().getUTCMinutes(),
        count = Object.keys(toDoList).length;
    toDoList['item0'] = {
        type: selectionLoc.val(),
        task: taskInput.val(),
        taskCreated: day + '.' + month + '.' + year,
        time: hours + ':' + minutes,
        done: false
    };
    /*creating object item*/
    taskInput.val('');//clear input field
    if (count == 0) {
        toDoList['item1'] = toDoList['item0'];
        delete toDoList['item0'];
    } else {
        toDoList['item' + (count + 1)] = toDoList['item0'];
        delete toDoList['item0'];
    }
    /*changing object keys names, to prevent overwriting*/
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    refreshOutput();
};
addBtn.click(function () {
    if (taskInput.val() == "") {
        $('.overlay').css('display', 'flex');
        return;
    }
    addValueToOb();
});
/*add value to object by pressing "add task" btn*/
$(document).ready(function () {
    $("#task").keydown(function (event) {
        if (event.which == 13) {//13 enter key
            if (taskInput.val() == "") {
                $('.overlay').css('display', 'flex');
                return;
            }
            addValueToOb();
        }
    });
});
/*add value to object by pressing "enter" while input is active*/
$('#cancel').click(function () {
    $('.overlay').hide();
});
/*hide overlay/warning block*/



function editList() {
    var count = Object.keys(toDoList).length,
        outputContent = '',
        outputMobile = '',
        a = 1,
        i = 1;
    while (i <= count) {
        if (toDoList['item' + i].done === true) {
            doneClass = 'greenIco'
        } else {
            doneClass = '';
        }
        /*Determine if task is accomplished for desktop.*/
        outputContent +=
            '<tr>' +
            '<th scope="row">' + i + '</th>' +
            '<td class="type' + i + ' td">'+
                '<select onchange="changeVal('+i+')" class=".type'+i+' form-control" id="taskType">'+
                    '<option>'+toDoList['item'+i].type+'</option>'+
                    '<option>Do once</option>'+
                    '<option>EveryDay</option>'+
                    '<option>Once a week</option>'+
                    '<option>Once a month</option>'+
                    '<option>Once a Year</option>'+
                    '<option>Do do this ever</option>'+
                '</select></td>'+
            '<td><input onkeypress="rename(event, '+i+')" class="editV' + i + ' "value="' + toDoList['item' + i].task + '" type="text" maxlength="30"></td>' +
            '<td>' + toDoList["item" + i].taskCreated + ' ' + toDoList["item" + i].time + '</td>' +
            '<td><div onclick="clickEvent(' + i + ')" class="done ico '+doneClass+' "></div></td>' +
            '<td><div onclick="deleteClick(' + i + ')" class="ico del"></div></td>' +
            '</tr>';
        i++;
        /*desktop view*/
    };
    while (a <= count) {
        if (toDoList['item' + a].done === true) {
            doneClass = 'done_t'
        } else {
            doneClass = '';
        }
        /*Determine if task is accomplished for mobile.*/
        outputMobile +=
        '<div class="card border-secondary mb-3" style="max-width: 18rem;">'+
            '<div class="card-header bg-light border-secondary"><div class="cardI">'+a+'#</div><div class="cardTime">'+toDoList["item" + a].taskCreated + ' ' + toDoList["item" + a].time + '</div></div>'+
                '<div class="card-body text-dark"><p onclick="showRename(' + a + ')" class="edit' + a + ' ' + doneClass + ' card-text cardTask">' + toDoList["item" + a].task + '</p>'+
                '<p onclick="showSelect(' + a + ')" class="type' + a + ' td">' + toDoList["item" + a].type + '</p>'+
            '</div>'+
            '<div class="card-footer bg-transparent border-secondary"><div onclick="clickEvent(' + a + ')" class="done ico"></div><div onclick="deleteClick(' + a + ')" class="ico del"></div></div>'+
        '</div>'
        a++;
        /*mobile view*/
    };
    outputLoc.html('<table class="table">' + tableHeader + '<tbody>' + outputContent + '</tbody></table>' + '<div class="cards">' + outputMobile + '</div>');
};
function clickEvent(a) {
    var testloc = $('#create_list').hasClass('active');

    if (toDoList['item' + a].done === false) {
        toDoList['item' + a].done = true;
    } else {
        toDoList['item' + a].done = false;
        toDoList.set
    }
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    if(testloc == true){
        refreshOutput();
    }else{
        editList();
    }
};
/*finishes task*/
function deleteClick(a) {
    var count = Object.keys(toDoList).length;
    while (a <= count) {
        toDoList['item' + a] = toDoList['item' + (a + 1)];
        a++
    }
    delete toDoList['item' + count];
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    //only can delete last task
    if(Object.keys(toDoList).length > 0){
        editList();
    }else{
        $('.output').html(noList);
    }

};
/*delete task*/
function showRename(a) {
    if ($(window).width() < 768) {
        $('.table').remove();
        $('<textarea onkeypress="rename(event, ' + a + ')" class="input editV' + a +'" maxlength="30">' + toDoList['item' + a].task + '</textarea>').replaceAll(".edit" +a)
    }else{
        $('<td><input onkeypress="rename(event, ' + a + ')" class="input editV' + a + ' "value="' + toDoList['item' + a].task + '" type="text" maxlength="30"></td>').replaceAll(".edit" + a);
    }
}
function rename(event, a) {
    var value = $('.editV' + a).val();
    if ($(window).width() < 768) {
        $('.table').remove();
    }
/*hides for moment desktop table ,because double inputs cant edit */
    var x = event.which;
    if (x == 13) {
        if (value == "") {
            $('.overlay').css('display', 'flex');
            return;
        }
/*check if input field is empty */
        toDoList['item' + a].task = value;
        editList();
    };
}
/*Rename task*/
function showSelect(i) {
    var selector = $('#taskType').clone();
    if ($(window).width() > 768) {
        return;
    }
    $('.type' + i).html(selector);
    /*clone selection from create list page*/
    $('.type' + i + ' .form-control').show();
    $('.type' + i).prop("onclick", null).off("click");
    /*preventing flickering */
    $('.type' + i + ' .form-control').attr("onchange", "changeVal(" + i + ")");
}
function changeVal(i) {
    if ($(window).width() < 768) {
        $('.table').remove();
    }
    /*only removes element if app is in mobile version(without it cant change value in mobile)*/
    toDoList['item' + i].type = $('.type' + i + ' .form-control').val();
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    editList();
}
/* changes value  in object and rewrites htm*/
/*creating selection in Edit list*/

downloadBtn.click(function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(toDoList)));
    element.setAttribute('download', 'TodoList.');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });
/*download list */
$('#editList').click(function () {
    $('.nav-link').removeClass('active');
    $('#editList').addClass('active');
    $(' #downPage, .list-group, .add, #aboutPage').hide();
    $('.output').show();
    if(Object.keys(toDoList).length > 0){
        $('.table').show();
        editList();
    }else{
        $('.output').html(noList);
    }

});
$('#create_list').click(function () {
    $('.nav-link').removeClass('active');
    $('#create_list').addClass('active');
    $('#downPage, .table, #aboutPage').hide();
    $('.output, .add').show();
    refreshOutput();
});
$('#DownPage').click(function () {
    $('.nav-link').removeClass('active');
    $('#DownPage').addClass('active');
    $('.table, .output, #aboutPage, .add ').hide();
    $('#downPage').show();
    if(Object.keys(toDoList).length <= 0){
    downloadBtn.prop('disabled', true);
    }else{
    downloadBtn.prop('disabled', false);
    }
/*disabled btn if list empty */
    refreshOutput();
});
$('#AboutPage').click(function () {
    $('.nav-link').removeClass('active');
    $('#AboutPage').addClass('active');
    $('.table, .output, #downPage,  .add').hide();
    $('#aboutPage').show();
    refreshOutput();
});
