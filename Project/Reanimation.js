
    let static;
    let i =2;
    let counts=1;
    let array1=[];
     while(i<=5){
    
     static =window.localStorage.getItem("Static"+i);
     let filter1=static.replace("{"," ");
     let filter2=filter1.replace("}"," ");
         
         array1=filter2.split(",");
         i+=1;
         if(array1[3].includes("2")){
             const el = document.createElement('div');
     el.setAttribute("id","card"+counts);
     el.setAttribute("draggable","true");
   el.setAttribute("onDragStart","drag(event)");
    el.className = "card";  
    const t = document.getElementById("Ticket2");
    t.appendChild(el);
    ////
  
    
 
 ///Hier is wat als binne in die div kom wat hier bo declare word.
 const els1 =document.createElement('p');//Kies net die soort element wat jy will he moet binne die div kom.
 const els2 =document.createElement('p');
 const els3 =document.createElement('p');
 const btn1 = document.createElement('a');
 ///Die text vir elke nuwe element wat gemaak word.
 els1.textContent= array1[0];//
 els2.textContent= array1[1];
 els3.textContent=array1[2];
 btn1.textContent="View";//button wat op die ende kom.
 ///////
 
 btn1.href="#divTwo";//net om die info card to display.
 
 const z = document.getElementById('card'+counts);//Moenie verander nie dit maak seker elke card het n ander id.
 //na al daai daar bo dan appendChild jy nie die element na die div.
 z.appendChild(els1);
 z.appendChild(els2);
 z.appendChild(els3);
 z.appendChild(btn1);
 counts++;
         }
 
 
     }
    
 
 
 
 
 