let list=[];
let edit = -1;

 function save(){
  let task={

  }
  let date=document.getElementById("date").value;
   let inp= document.getElementById("inp").value ;
 

     


    if (edit == -1) {
    list.push(inp);
  } else {
    list[edit] = { inp };
    edit = -1;
  } 


clear();
  show();


 }

 function show(){
    
    let lo="";
   for (let i = 0; i < list.length; i++) {
       
   lo+= "<li>" + list[i] + "</li>" +
    "<button onclick='del(" + i + ")'>Delete</button>" 

   }
   document.getElementById("div3").innerHTML=lo;
 }

 function del(i) {
  list.splice(i, 1);
  show();
}
function clear() {
  document.getElementById("inp").value = "";

}