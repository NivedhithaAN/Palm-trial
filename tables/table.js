
    var myArray=[{name:'ponnu',password:'1',email:'aiswaryatp73@gmail.com'},  
      {name:'pnu',password:'2',email:'anusreetp@gmail.com'},
      {name:'pou',password:'3',email:'minitp@gmail.com'},


];
function displayTableData(){
var html="<table border='1|1' class='table'>";
    setTimeout(()=>{
        html+='<tread >'
        html+="<tr class='ta1'>";
        html+='<td>'+"name"+'</td>';
        html+='<td>'+"email"+'</td>';
        html+='<td>'+"password"+'</td>';
        html+='<td>'+"action"+'</td>';
        html+='</tr>';
        html+='</tread>';
        for(var i=0;i<myArray.length;i++){
            var sno=i;+1
            html+='<tr>';
            html+='<td>'+myArray[i].name+'</td>';
            html+='<td>'+myArray[i].email+'</td>';
            html+='<td>'+myArray[i].password+'</td>';
            html+='<td>'+ `<button type="button"class="bu"onClick='removeItem(${myArray[i].id})'>remove</button>`+"</td>";
            html+='</tr>';
        }
        html+="</table>";
        document.getElementById("table").innerHTML=html
    },500);


}
displayTableData();
function addOnClick(){
    var name=document.getElementById('name').value ;
    var email=document.getElementById('email').value ;
    var password=document.getElementById('password').value ;
    if(name &&email&&password){
        let id=myArray.length+1;
        myArray.push({name:name,email:email,password:password})
        displayTableData();
        clearItems();
       

    }
}
function clearItems(){
    document.getElementById('name').value=""
    document.getElementById('email').value=""
    document.getElementById('password').value=""
    
}
function removeItem(rec){
console.log(rec);
var filt=myArray.filter((a,i)=>{
    if(rec==a.id){
        myArray.splice(i,1);
        displayTableData();
    }

})
console.log(myArray);
}
