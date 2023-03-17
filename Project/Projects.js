var Add_NewBtn = document.querySelector('.Add_New');
var modalBg = document.querySelector('.modal-bg');
var modalClose= document.querySelector('.modal-close');
var SelectedRow = null;

//Event For pop up
Add_NewBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active')
});
//Event for hidding pop up
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

//Excecute function for projects table
/*function onFormSubmit(){
 event.preventDefault();
 var arrData = addData();
 if(SelectedRow == null){
    showData(arrData);
    localStorage.clear();
    ;
 }
 else{
    onEdit1(arrData);
    localStorage.setItem("LocalData",JSON.stringify(arr));
 }
 //reset();
}*/


//retrieve the data for project table
/*function readFormData(data){
    var formData = {};
    formData["Project_ID"] =document.getElementById("popID").value;
    formData["Project_Name"] =document.getElementById("popName").value;
    formData["Project_Descr"] =document.getElementById("popDescr").value;
    formData["Project_Creator"] =document.getElementById("popCreator").value;
    formData["Project_Date"] =document.getElementById("popDate").value;
    return formData;
}*/

var arr = new Array();

// Put data into Local storage;
function addData(){
   getData();
   arr.push({
    popID:document.getElementById("popID").value,
    popName:document.getElementById("popName").value,
    popDescr:document.getElementById("popDescr").value,
    popCreator:document.getElementById("popCreator").value,
    popDate:document.getElementById("popDate").value
   });
    localStorage.setItem("LocalData",JSON.stringify(arr))
}



//get data from local storage 
function getData() {
    var str = localStorage.getItem("LocalData");
    if (str != null){
    arr = JSON.parse(str);
    }
}



//Insert Data from local storage to table
function showData(){
    getData();
    var table = document.getElementById("ProjectsList");
    var x = table.rows.length;
    while(--x){
        table.deleteRow(x);
    }
    for(let i=0; i<arr.length; i++)
    {
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = arr[i].popID;    

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = arr[i].popName;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = arr[i].popDescr;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = arr[i].popCreator;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = arr[i].popDate;

     var cell6 = newRow.insertCell(5);
         cell6.innerHTML = '<button OnClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button onClick="onDelete(this)"><i class="fa-solid fa-trash"></i></button> <button><a href="Team.html"><i class="fa-solid fa-info"></i></a></button></button>'
    }
}

function deleteRow(index){
    var table = document.getElementById("ProjectsList");
    table.deleteRow(td);
}




function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    modalBg.classList.add('bg-active');
            document.getElementById("popID").value = selectedRow.cells[0].innerHTML;
            document.getElementById("popName").value = selectedRow.cells[1].innerHTML;
            document.getElementById("popDescr").value = selectedRow.cells[2].innerHTML;
            document.getElementById("popCreator").value = selectedRow.cells[3].innerHTML;
            document.getElementById("popDate").value = selectedRow.cells[4].innerHTML; 

}







//Edit projects data
/*function onEdit1(e){
    modalBg.classList.add('bg-active');
    console.log(e.rowIndex);
   // SelectedRow = td.parentElement.parentElement;
      var str = localStorage.getItem("LocalData") 
    arry1 = JSON.parse(str)
    document.getElementById("popID").value = arry1[index]["popID"];
    //document.getElementById("popID").value     =  JSON.parse(localStorage.getItem(SelectedRow,"popID"));
   /* document.getElementById("popName").value   =  arr[SelectedRow];
    document.getElementById("popDescr").value  =   arr[SeletedRow].popDescr;
    document.getElementById("popCreator").value = arr[selectedRow].popCreator;
    document.getElementById("popDate").value    =  arr[SelectedRow].popDate;

}*/



//Insert the data to projects table
/*function insertNewRecord(data){
    var table = document.getElementById("ProjectsList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Project_ID;    
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Project_Name;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Project_Descr;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Project_Creator;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Project_Date;

     var cell6 = newRow.insertCell(5);
         cell6.innerHTML = '<button OnClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></button> <button onClick="onDelete(this)"><i class="fa-solid fa-trash"></i></button> <button><a href="Team.html"><i class="fa-solid fa-info"></i></a></button></button>'

}*/





//Delete projects data 
function onDelete(td){
     if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        var str = localStorage.getItem("LocalData");
        arry1= new Array();
        arry1 = JSON.parse(str);
       
        i = row.rowIndex -1;
        delete arry1[i];

        localStorage.setItem("LocalData",JSON.stringify(arry1));
        console.log(i);
        document.getElementById('ProjectsList').deleteRow(row.rowIndex);
        //resetForm();
     }

}



//Search for project
function tableSearch(){
    let input, filter , table , tr, td, textValue;

     input = document.getElementById("Search_By_Name");
     filter = input.value.toUpperCase();
     table = document.getElementById("ProjectsList");
     tr = table.getElementsByTagName("tr");

     for(let i=0; i<=tr.length; i++)
     {
        td=tr[i].getElementsByTagName("td")[1];
        if(td) {
            textValue = td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }

            else{
                tr[i].style.display ="none";
            }
        }
     }

}


//-----------------------------------------------------------------------
//-----------------------------------------------------------------------




//Execute  function for members table
function onMemFormSubmit(){
    event.preventDefault();
    var FormData1 = readMemFormData();
    if(SelectedRow == null){
       addMember(FormData1);
    }
    else{
        //updateRecord(FormData);
    }
    //resetForm();
   }



//var Memebers = [SC30,KD7,LB23,]

//read data entered for memebers page
function readMemFormData(){
    var formData1 = {};
    formData1["Member_ID"] =document.getElementById("MemberID").value;
    return formData1;
}



//Add Memebers to mebers table
function addMember(data){
    var table2 = document.getElementById("MembersList").getElementsByTagName('tbody')[0];
      var newRow = table2.insertRow(table2.length);
//function myimages(){
// document.getElementById("images").src = images [0];

if (data.Member_ID == "SC30"){
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = "SC30";

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = "Stephen";

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "Curry";

        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = "TheChefCurry30@gmail.com";

        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = "(064)121-7622";

        var cell6 = newRow.insertCell(5);
        cell6.innerHTML = '<button onClick="onDeleteMem(this)"><i class="fa-solid fa-trash"></i></button>';
 }


 if (data.Member_ID == "JSKK"){
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "JSKK";

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "Jessica";

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Lovely";

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = "JessicaLovely@gmail.com";

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = "(082)161-7542";

    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<button onClick="onDeleteMem(this)"><i class="fa-solid fa-trash"></i></button>';
}
}





//Delete memebers from memebers table 
function onDeleteMem(td){
    if(confirm('Are you sure you want to delete this record?')){
       row = td.parentElement.parentElement;
       document.getElementById('MembersList').deleteRow(row.rowIndex);
       resetForm();
    }

}

