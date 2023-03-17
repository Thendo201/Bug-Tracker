function viewTicket(num) {

    let myCar = document.getElementById(`card${num}`);
    let kids = myCar.children;

    let PersonName = kids[0].innerHTML.substring(kids[0].innerHTML.indexOf(":"), kids[0].innerHTML.length);
    let date = kids[1].innerHTML.substring(kids[1].innerHTML.indexOf(":"), kids[1].innerHTML.length);
    let issues = kids[2].innerHTML.substring(kids[2].innerHTML.indexOf(":"), kids[2].innerHTML.length);
    let priority = kids[3].innerHTML.substring(kids[3].innerHTML.indexOf(":"), kids[3].innerHTML.length);
    let description = kids[4].innerHTML.substring(kids[4].innerHTML.indexOf(":"), kids[4].innerHTML.length);
  
    const element1 = document.createElement("div");
    element1.setAttribute("id", "divTwo" + num);
    element1.className = "overlay";
    element1.style.visibility = 'visible';
    element1.style.opacity = '1';
  
    const ov1 = document.getElementById("over");
    ov1.appendChild(element1);
  
    const element2 = document.createElement("div");
    element2.className = "lap";
    element2.setAttribute("id", "lap" + num);
  
    const ov2 = document.getElementById("divTwo" + num);
    ov2.appendChild(element2);
  
    const hElement = document.createElement("h2");
    hElement.innerText="Ticket Number: #0" + num;
    hElement.setAttribute("id", "hh");
    const ov3 = document.getElementById("lap" + num);
    ov3.appendChild(hElement);

    const btnclose = document.createElement('button');
    btnclose.innerText = "Close";
    btnclose.setAttribute("id", "btnClose");
    btnclose.setAttribute("onclick", `Exit(${num})`);
    btnclose.style.position = "absolute";
    btnclose.style.top = "0";
    btnclose.style.right = "0";
    btnclose.style.marginRight = "10px";
    btnclose.innerText = `close`;
    ov3.appendChild(btnclose);

    const divEl1 = document.createElement("div");
    divEl1.setAttribute("class", "content");
    ov3.appendChild(divEl1);

    const divEl2 = document.createElement("div");
    divEl2.setAttribute("class", "content");
    ov3.appendChild(divEl2);

    const el2 = document.createElement('form');
    el2.setAttribute("id", "ticketView" + num);
    el2.className = "ticketView";
    ov3.appendChild(el2);
  
    const label1 = document.createElement("label");
    label1.setAttribute("id", "la");
    const els1 = document.createElement('input');
    els1.setAttribute("type", "text");
    els1.setAttribute("readOnly", "true");
    const label2 = document.createElement("label");
    label2.setAttribute("id", "la");
    const els2 = document.createElement('input');
    els2.setAttribute("type", "text");
    els2.setAttribute("readOnly", "true");
    const label3 = document.createElement("label");
    label3.setAttribute("id", "la");
    const els3 = document.createElement('input');
    els3.setAttribute("type", "text");
    els3.setAttribute("readOnly", "true");
    const label4 = document.createElement("label");
    label4.setAttribute("id", "la");
    const els4 = document.createElement('input');
    els4.setAttribute("type", "text");
    els4.setAttribute("readOnly", "true");
    const els5 = document.createElement('label');
    const space = document.createElement("p");
  
    label1.textContent = "Issued By:";
    els1.value = PersonName;
    els5.textContent = "Date Issued: " + date;
    label2.textContent = "Category of Issue:";
    els2.value = issues;
    label3.textContent = "Priority level of Issue:";
    els3.value = priority;
    label4.textContent = "Short description of Issue:";
    els4.value = description;
  
    const z = document.getElementById('ticketView' + num);
    z.appendChild(label1);
    z.appendChild(els1);
    z.appendChild(els5);
    z.appendChild(space);
    z.appendChild(label2);
    z.appendChild(els2);
    z.appendChild(label3);
    z.appendChild(els3);
    z.appendChild(label4);
    z.appendChild(els4);
  }
  
  function Exit(num){
    let close = document.getElementById(`divTwo${num}`);
  
    close.remove();
  }