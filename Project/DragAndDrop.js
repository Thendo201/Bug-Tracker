function allowDrop(ev) {
    ev.preventDefault();
   
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  let TargetID;
  let CardID;



  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

   
     TargetID= document.getElementById(ev.target.id);
     if(TargetID.id=="Ticket2"){
      CardID=2;
     }else if (TargetID.id=="Ticket3"){
      CardID=3;
     }else if(TargetID.id=="Ticket4" ){
      CardID=4;
     }
    const Tickets={
      Name:PersonName,
      issuesreported: issues,
      priorities: priority,
      Targets:CardID
    }
    
 localStorage.setItem("Static"+countamount,JSON.stringify(Tickets))


  }
  