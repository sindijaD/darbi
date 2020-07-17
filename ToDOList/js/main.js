if (localStorage.getItem("toDoList") == null) {
  localStorage.clear();
  var toDoList = {};
} else {
  toDoList = JSON.parse(localStorage.getItem("toDoList"));
}
/**loading un converting string from local storage*/
$(".table").hide();
const addBtn = $("#addtask"),
  taskInput = $("#task"),
  selectionLoc = $("#taskType"),
  done = $(".done"),
  outputLoc = $(".output"),
  downloadBtn = $("#downloadList"),
  tableHeader =
    '<thead class="thead-dark">' +
    "<tr>" +
    '<th scope="col">#</th>' +
    '<th class="edit134" scope="col">Type</th>' +
    '<th class="px100" scope="col">Task</th>' +
    '<th scope="col">Task created</th>' +
    '<th scope="col">Done</th>' +
    '<th scope="col">Delete</th>' +
    "</tr>" +
    "</thead>",
  noList = "<h2>There is no tasks in list<h2>";
/**btn locations and inputs*/
refreshOutput = () => {
  var count = Object.keys(toDoList).length,
    outputContent = "",
    doneClass = "",
    i = 1;
  while (i <= count) {
    if (toDoList["item" + i].done === true) {
      doneClass = "done_t";
    } else {
      doneClass = "";
    }
    /**Determine if task is accomplished.*/
    outputContent +=
      '<li onclick="clickEvent(' +
      i +
      ')" class="list-group-item ' +
      doneClass +
      '">' +
      toDoList["item" + i].task +
      "</li>";
    i++;
    outputLoc.html('<ul class="list-group">' + outputContent + "</ul>");
  }
};
refreshOutput();

addValueToOb = () => {
  let day = new Date().getDate(),
    month = new Date().getUTCMonth(),
    year = new Date().getUTCFullYear(),
    hours = new Date().getHours(),
    minutes = new Date().getUTCMinutes(),
    count = Object.keys(toDoList).length;
  toDoList["item0"] = {
    type: selectionLoc.val(),
    task: taskInput.val(),
    taskCreated: day + "." + month + "." + year,
    time: hours + ":" + minutes,
    done: false,
  };
  /*creating object item*/
  taskInput.val(""); //clear input field
  if (count == 0) {
    toDoList["item1"] = toDoList["item0"];
    delete toDoList["item0"];
  } else {
    toDoList["item" + (count + 1)] = toDoList["item0"];
    delete toDoList["item0"];
  }
  /*changing object keys names, to prevent overwriting*/
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  refreshOutput();
};
addBtn.click(function () {
  if (taskInput.val() == "") {
    $(".overlay").css("display", "flex");
    return;
  }
  addValueToOb();
});
/*add value to object by pressing "add task" btn*/
$(document).ready(function () {
  $("#task").keydown(function (event) {
    if (event.which == 13) {
      //13 enter key
      if (taskInput.val() == "") {
        $(".overlay").css("display", "flex");
        return;
      }
      addValueToOb();
    }
  });
});
/*add value to object by pressing "enter" while input is active*/
$("#cancel").click(function () {
  $(".overlay").hide();
});
/*hide overlay/warning block*/

editList = () => {
  var count = Object.keys(toDoList).length,
    outputContent = "",
    outputMobile = "",
    greenIco = "",
    a = 1,
    i = 1;
  while (i <= count) {
    if (toDoList["item" + i].done === true) {
      doneClass = "greenIco";
    } else {
      doneClass = "done";
    }
    /*Determine if task is accomplished for desktop.*/
    outputContent +=
      "<tr>" +
      '<th scope="row">' +
      i +
      "</th>" +
      '<td class="type' +
      i +
      ' td">' +
      '<select onchange="changeVal(' +
      i +
      ')" class=".type' +
      i +
      ' form-control" id="taskType">' +
      "<option>" +
      toDoList["item" + i].type +
      "</option>" +
      "<option>Do once</option>" +
      "<option>EveryDay</option>" +
      "<option>Once a week</option>" +
      "<option>Once a month</option>" +
      "<option>Once a Year</option>" +
      "<option>Do do this ever</option>" +
      "</select></td>" +
      '<td><input onkeypress="rename(event, ' +
      i +
      ')" class="editV' +
      i +
      ' "value="' +
      toDoList["item" + i].task +
      '" type="text" maxlength="30"></td>' +
      "<td>" +
      toDoList["item" + i].taskCreated +
      " " +
      toDoList["item" + i].time +
      "</td>" +
      '<td><div onclick="clickEvent(' +
      i +
      ')" class="id' +
      i +
      "  ico " +
      doneClass +
      ' "></div></td>' +
      '<td><div onclick="deleteClick(' +
      i +
      ')" class="ico del"></div></td>' +
      "</tr>";
    i++;
    /*desktop view*/
  }
  while (a <= count) {
    if (toDoList["item" + a].done === true) {
      doneClass = "done_t";
      greenIco = "greenIco";
    } else {
      doneClass = "";
      greenIco = "done";
    }
    /*Determine if task is accomplished for mobile.*/
    outputMobile +=
      '<div class="card border-secondary mb-3">' +
      '<div class="card-header bg-light border-secondary"><div class="cardI">' +
      a +
      '#</div><div class="cardTime">' +
      toDoList["item" + a].taskCreated +
      " " +
      toDoList["item" + a].time +
      "</div></div>" +
      '<div class="card-body text-dark"><p onclick="showRename(' +
      a +
      ')" class="editMob' +
      a +
      " " +
      doneClass +
      ' card-text cardTask">' +
      toDoList["item" + a].task +
      "</p>" +
      '<p onclick="showSelect(' +
      a +
      ')" class="type' +
      a +
      ' td">' +
      toDoList["item" + a].type +
      "</p>" +
      "</div>" +
      '<div class="card-footer bg-transparent border-secondary"><div onclick="clickEvent(' +
      a +
      ')" class="id' +
      a +
      " ico " +
      greenIco +
      '"></div><div onclick="deleteClick(' +
      a +
      ')" class="ico del"></div></div>' +
      "</div>";
    a++;
    /*mobile view*/
  }
  outputLoc.html(
    '<table class="table">' +
      tableHeader +
      "<tbody>" +
      outputContent +
      "</tbody></table>" +
      '<div class="cards">' +
      outputMobile +
      "</div>"
  );
};
clickEvent = (a) => {
  var testloc = $("#create_list").hasClass("active");
  if (toDoList["item" + a].done === false) {
    toDoList["item" + a].done = true;
    $(".id" + a).replaceWith(
      '<div onclick="clickEvent(' +
        a +
        ')" class="id' +
        a +
        ' ico greenIco "></div>'
    );
    $(".edit" + a).replaceWith(
      '<p onclick="showRename(' +
        a +
        ')" class="edit' +
        a +
        ' done_t card-text cardTask">' +
        toDoList["item" + a].task +
        "</p>"
    );
  } else {
    toDoList["item" + a].done = false;
    $(".id" + a).replaceWith(
      '<div onclick="clickEvent(' +
        a +
        ')" class="id' +
        a +
        ' ico done "></div>'
    );
    $(".edit" + a).replaceWith(
      '<p onclick="showRename(' +
        a +
        ')" class="edit' +
        a +
        ' card-text cardTask">' +
        toDoList["item" + a].task +
        "</p>"
    );
  }
  if (testloc == true) {
    refreshOutput();
  }
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
};
/**finishes task*/
deleteClick = (a) => {
  let count = Object.keys(toDoList).length;
  while (a <= count) {
    toDoList["item" + a] = toDoList["item" + (a + 1)];
    a++;
  }
  delete toDoList["item" + count];
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  if (Object.keys(toDoList).length > 0) {
    editList();
  } else {
    $(".output").html(noList);
  }
};
/**delete task*/
showRename = (a) => {
  $(
    '<textarea onkeypress="rename(event, ' +
      a +
      ')" class="input editMob' +
      a +
      '" maxlength="30">' +
      toDoList["item" + a].task +
      "</textarea>"
  ).replaceAll(".editMob" + a);
};
rename = (event, a) => {
  let valueD = $(".editV" + a).val(),
    valueMob = $(".editMob" + a).val();
  let x = event.which;
  if (x == 13) {
    if (valueD == "" && valueMob == "") {
      $(".overlay").css("display", "flex");
      return;
    }
    /**check if input field is empty */
    if (window.innerWidth > 768) {
      toDoList["item" + a].task = valueD;
    } else {
      toDoList["item" + a].task = valueMob;
    }
    $("editV" + a).replaceWith(
      '<input onkeypress="rename(event, ' +
        a +
        ')" class="editV' +
        a +
        ' "value="' +
        toDoList["item" + a].task +
        '" type="text" maxlength="30">'
    );
    /**edit page output form desktop*/
    if (toDoList["item" + a].done === true) {
      doneClass = "done_t";
      greenIco = "greenIco";
    } else {
      doneClass = "";
      greenIco = "done";
    }
    $(".editMob" + a).replaceWith(
      '<p onclick="showRename(' +
        a +
        ')" class="editMob' +
        a +
        " " +
        doneClass +
        ' card-text cardTask">' +
        toDoList["item" + a].task +
        "</p>"
    );
    $(".id" + a).replaceWith(
      '<div onclick="clickEvent(' +
        a +
        ')" class="id' +
        a +
        " ico " +
        greenIco +
        '"></div>'
    );
    /**Output for device lesser the 768px screen  */
  }
};
/**Rename task*/
showSelect = (i) => {
  let selector = $("#taskType").clone();
  if ($(window).width() > 768) {
    return;
  }
  $(".type" + i).html(selector);
  /*clone selection from create list page*/
  $(".type" + i + " .form-control").show();
  $(".type" + i)
    .prop("onclick", null)
    .off("click");
  /*preventing flickering */
  $(".type" + i + " .form-control").attr("onchange", "changeVal(" + i + ")");
};
changeVal = (i) => {
  if ($(window).width() < 768) {
    $(".table").remove();
  }
  /*only removes element if app is in mobile version(without it cant change value in mobile)*/
  toDoList["item" + i].type = $(".type" + i + " .form-control").val();
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  editList();
};
/* changes value  in object and rewrites htm*/
/*creating selection in Edit list*/

downloadBtn.click(
  (download = () => {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(toDoList))
    );
    element.setAttribute("download", "TodoList.json");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  })
);

/**download list */
const headingD = "Do you want download this list",
  headingNon = "Item is not selected",
  headingImport = "Do you want to import this list?";

$("#downloadList").hover(
  function () {
    $(".noItem").text(headingD);
    $(".showList").hide();
    var content = $(".list-group").clone();
    $(".outputContainer").append(content);
    $(".outputContainer .list-group").hide().slideDown(500);
  },
  function () {
    if ($(".showList").length > 0) {
      //check if import exist.
      $(".noItem").text(headingImport);
    } else {
      $(".noItem").text(headingNon);
    }
    $(".outputContainer .list-group").slideUp(500);
    setTimeout(function () {
      $(".outputContainer .list-group").remove();
      $(".showList").slideDown(500);
      $(".outputContainer").slideDown(500);
    }, 500);
  }
);
/**show what to download */
importList = () => {
  let files = document.getElementById("selectFiles").files;
  let reader = new FileReader();
  reader.onload = function (e) {
    let result = JSON.parse(e.target.result);
    toDoList = result;
    localStorage.setItem("toDoList", JSON.stringify(result));
  };
  reader.readAsText(files.item(0));
  $(".outputContainer div").slideUp();
  setTimeout(function () {
    $(".outputContainer div").remove();
  }, 500);
  $(".noItem").text(headingNon);
};
/**upload file function */
$("#continueImport").click(function () {
  importList();
  $(".overlayDown").css("display", "none");
});
/**continue file import */
$("#cancelImport").click(function () {
  $(".overlayDown").css("display", "none");
});
/**cancel import */
$("#import").click(function () {
  if (Object.keys(toDoList).length > 0) {
    $(".overlayDown").css("display", "flex");
  } else {
    importList();
  }
});
/**check if list already exist ,if  it does then show warning */
$("#DownPage").click(function () {
  var files = document.getElementById("selectFiles").files;
  if (files.length == 0) {
    $("#import").prop("disabled", true);
  } else {
    $("#import").prop("disabled", false);
  }
});
/**disable import btn if file not selected */
$("#selectFiles").on(
  "change",
  (showFileContent = () => {
    let files = document.getElementById("selectFiles").files;
    let reader = new FileReader();
    reader.onload = function (e) {
      let result = JSON.parse(e.target.result);
      $(".showList").remove();

      let nr = 1,
        length = Object.keys(toDoList).length,
        resultOutput = "";
      while (nr < length + 1) {
        if (result["item" + nr].done === true) {
          doneClass = "done_t";
        } else {
          doneClass = "";
        }
        resultOutput +=
          '<li class="' +
          doneClass +
          '" >' +
          result["item" + nr].task +
          "</li>";
        nr++;
      }

      $(".outputContainer").append(
        '<ul class="showList">' + resultOutput + "</ul>"
      );
      $(".showList").hide().slideDown(500);
      $(".noItem").text(headingImport);

      if (files.length > 0) {
        $("#import").prop("disabled", false);
      }
    };
    reader.readAsText(files.item(0));
  })
);
/**show uploaded file content */
$("#editList").click(function () {
  $(".nav-link").removeClass("active");
  $("#editList").addClass("active");
  $(" #downPage, .list-group, .add, #aboutPage").hide();
  $(".output").show();
  if (Object.keys(toDoList).length > 0) {
    $(".table").show();
    editList();
  } else {
    $(".output").html(noList);
  }
});
$("#create_list").click(function () {
  $(".nav-link").removeClass("active");
  $("#create_list").addClass("active");
  $("#downPage, .table, #aboutPage").hide();
  $(".output, .add").show();
  refreshOutput();
});
$("#DownPage").click(function () {
  $(".nav-link").removeClass("active");
  $("#DownPage").addClass("active");
  $(".table, .output, #aboutPage, .add ").hide();
  $("#downPage").show();
  if (Object.keys(toDoList).length <= 0) {
    downloadBtn.prop("disabled", true);
  } else {
    downloadBtn.prop("disabled", false);
  }
  /*disabled btn if list empty */
  refreshOutput();
});
$("#AboutPage").click(function () {
  $(".nav-link").removeClass("active");
  $("#AboutPage").addClass("active");
  $(".table, .output, #downPage,  .add").hide();
  $("#aboutPage").show();
  refreshOutput();
});
/**nav menu */
