//JSON JavaScriot object notation

/*var task1 = { name:"putzen", isDone: false, responsible: "Vedran"};
var task2 = { name:"kochen", isDone: true, responsible: "Vedran"};*/

//console.log(task2)
const tasks = [];
console.log(tasks);

/*getHTMLTasks();*/
printTaskList();

document.getElementById("addTask").addEventListener("click", function () {
  addTask();
});

function markTask(element) {
  let indexOf = element.attributes["data-indexOf"].value;
  let isChecked = element.checked;
  tasks[indexOf].isDone = isChecked;
  //alert("mark "+element.checked+ " "+element.attributes["data-indexOf"].value);
  printTaskList();
}

function addTask() {
  let taskName = document.getElementById("txtNewTask").value;
  let taskResponsible = document.getElementById("txtResponsible").value;
  var tStamp;
  let task = { name: taskName, isDone: false, responsible: taskResponsible, fColor: "white", tStamp: ""};
  tasks.push(task);
  printTaskList();
}

function removeTask(x){
  tasks.splice(x, 1);
  printTaskList()
}

function printTaskList() {
  //document.getElementById("taskList").innerHTML = getHTMLTasks();
  document.getElementById("taskList").innerHTML = getHTMLTasks2();
}

function getHTMLTasks() {
  let html = "";
  let html2 = "";
  let indexOf = 0;

  tasks.forEach((element) => {
    /*console.log(element);*/
    let checked = "";
    let source = "";
    let fColor=""

    if (element.isDone) {
      checked = "checked";
    }

    switch (element.responsible){
    case responsible="Vedran":
      source = "media/Vedran.jpg";
      fColor= "blue"
      break;
    case responsible="Elisa":
      source = "media/Elisa.jpg";
      fColor= "blueviolet"
      break;
    case responsible="Emanuel":
      source = "media/Emanuel.jpg";
      fColor= "orange"
      break;
    default:
    source = "media/NoPhoto.png";
    fColor= "white"
    };
    let temp = new Date();
    var date = temp.getDate();
    var month = temp.getMonth()+1; //Be careful! January is 0 not 1
    var year = temp.getFullYear();
    tStamp=date+". "+month+". "+year
    html += "<li style='color:"+fColor+";'><input onClick='markTask(this)' name='checkbox' data-indexOf='" + indexOf + "' type='checkbox'" + checked + "/> " + "  " + element.name + "  " + element.responsible + " " +"<img src=" + source +" alt='' width='80' height='80'>"+ " "+ tStamp +" "+"<button onClick='removeTask("+indexOf+")'>Remove Task</button></li>";
    indexOf++;
  });
  /*console.log(html);*/
  return html;
}

function getHTMLTasks2() {
  let html = "";
  let indexOf = 0;

  tasks.forEach((element) => {
    let checked = "";
    let source = "";

    if (element.isDone) {
      checked = "checked";
    }
    switch (element.responsible){
      case responsible="Vedran":
        source = "media/Vedran.jpg";
        fColor= "blue"
        break;
      case responsible="Elisa":
        source = "media/Elisa.jpg";
        fColor= "blueviolet"
        break;
      case responsible="Emanuel":
        source = "media/Emanuel.jpg";
        fColor= "orange"
        break;
      default:
      source = "media/NoPhoto.png";
      fColor= "white"
      };
      let temp = new Date();
      var date = temp.getDate();
      var month = temp.getMonth()+1; //Be careful! January is 0 not 1
      var year = temp.getFullYear();
      var hours = temp.getHours();
      var minutes = temp.getMinutes();
      tstamp2= hours + " " + minutes
      tStamp=date+". "+month+". "+year
      html += "<div class='container'><div class='row'><div class='col-1' id='first'><input onClick='markTask(this)' name='checkbox' data-indexOf='" + indexOf+ "' type='checkbox'" + checked + "/></div><div class='col-4' id='second'>" + element.name + " / " + element.responsible + "</div><div class='col-2' id='second' style='background-image: url("+ source +"); background-size: cover; background-position: center;'>" +tstamp2 + "</div><div class='col-3' id='fourth'>"+ tStamp +"</div><div class='col-2' id='fourth'><button onClick='removeTask("+indexOf+")'>Remove Task</button></div></div></div>"
    
    indexOf++;
  });
  return html;
}

