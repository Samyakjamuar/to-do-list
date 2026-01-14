let list=[];
let edit = -1;

 function save(){
  
  let date=document.getElementById("date").value;
   let inp= document.getElementById("inp").value ;
 

     


    if (edit == -1) {
    list.push({taak:inp,da:date});
  } else {
    list[edit] = { taak:inp,da:date };
    edit = -1;
  } 


clear();
  show();


 }

 function show(){
    let rows="";

     for (let i = 0; i < list.length; i++) {
      if (list[i].da < "13-01-2006") {
          list[i].da.style.Color = "red";
  } 
    rows +=
      "<tr>" +
      "<td>" + list[i].taak + "</td>" +
      
      "<td>" + list[i].da + "</td>" +
      
      "<button onclick='del(" + i + ")'>Delete</button>" +
      
      "</tr>";
  }
   document.getElementById("table").innerHTML=rows;
 }

 function del(i) {
  list.splice(i, 1);
  show();
}
function clear() {
  document.getElementById("inp").value = "";
  document.getElementById("date").value="";
}