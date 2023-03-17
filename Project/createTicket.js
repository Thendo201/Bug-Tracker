//Creates new tickets.
let count = 1;
let  countamount=1;
let PersonName,issues,priority;
function createTickets() {
   //make sure all input has an id to be able to get the values
    PersonName = document.getElementById("FullName").value;

   //Validation for adding a ticket
   if (PersonName == '') {
      return null;
   }

   // <-- getting the vlause from the create ticket function
    issues = document.getElementById("issues").value;
    priority = document.getElementById("priority").value;
   let description = document.getElementById("description").value;
   let dateissued = new Date();
   let day =  dateissued.getDate();
   let year = dateissued.getFullYear();
   let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   let date = day + " " + month[dateissued.getMonth()] + " " + year;
   // -->

   // <-- creating a div(card) to display the card and the content in the "Tickets Issued" column
   const el = document.createElement('div');
   el.setAttribute("id", "card" + count);
   el.setAttribute("draggable", "true");
   el.setAttribute("onDragStart", "drag(event)");
   el.setAttribute("ondragover", "");
   el.setAttribute("ondrop", "");
   el.className = "card";
   const t = document.getElementById("Ticket1");
   t.appendChild(el);
   // -->

   // <-- Here is everything being declared inside the card div so that the data can be displayed
   const els1 = document.createElement('h1');
   els1.setAttribute("class", "devname");
   const els2 = document.createElement('p');
   const els3 = document.createElement('p');
   const els4 = document.createElement('p');
   const els5 = document.createElement('p');
   const btn1 = document.createElement('a');
   // -->

   // <-- styling button on tickets
   btn1.style.padding = '4px', '6px';
   btn1.style.background = '#403e3d';
   btn1.style.color = 'white';
   btn1.style.textDecoration = 'none';
   btn1.style.borderRadius = '5px';
   btn1.style.marginTop = '20px';
   btn1.style.cursor = 'pointer';
   btn1.style.transition = 'all 0.3s ease-out';
   // -->

   // <-- The text for each new element that gets added to the card div
   els1.textContent = "Titcket issued By: " + PersonName;
   els5.textContent = "Date Issued: " + date;
   els2.textContent = 'Category of Issue: ' + issues;
   els3.textContent = 'Priority: ' + priority;
   els4.textContent = 'Description: ' + description;
   btn1.textContent = "View";
   // -->

   // <-- Assigning the viewTicket(count) funtion according to the ticket number that was created
   btn1.setAttribute("onclick", `viewTicket(${count})`);
   // -->

   // <-- this makes sure that each card has a unique id
   const z = document.getElementById('card' + count);
   // -->

   // <-- appending all the elements to the card
   z.appendChild(els1);
   z.appendChild(els5);
   z.appendChild(els2);
   z.appendChild(els3);
   z.appendChild(els4);
   z.appendChild(btn1);
   
   // -->
   const Tickect={
        
      Name:PersonName,
      issuesreported: issues,
      priorities: priority,
     
      
   };
   localStorage.setItem("TicketAmount",countamount);
   count=localStorage.getItem("TicketAmount");
localStorage.setItem("Tickect"+countamount,JSON.stringify(Tickect));

//saves the amount of tickets made.
let object=localStorage.getItem("Tickect"+count);
let Tickectobject=localStorage.getItem("TicketAmount");
count++
countamount++;
}