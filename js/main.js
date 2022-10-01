
let buttonAdd=document.querySelector(".add");
let input1=document.querySelector(".input1");
let input2=document.querySelector(".input2");
let bookmarks=document.querySelector(".bookmarks");
let arr=[];
let namee=document.querySelector(".name");
let addres=document.querySelector(".addres");
let del_All=document.querySelector(".del_all ");
let site_Add=document.querySelector(".site-add")
let site_nam=document.querySelector(".site-na")
let del_all_warn=document.querySelector(".del-all-warn")
let regex=/^((https:)|(http:))/;
/////////////////////////////////////////////////check if the item is exist in local storage//////////////////////////////////////////
if(localStorage.getItem('bookmarks')!==null){
    arr=JSON.parse(localStorage.getItem('bookmarks'))
    DISPLAY() ///// display function implemntion is after adding button
}
/////////////////////////////////////////////////check if the site already exist before adding it//////////////////////////////////////////
let check=function(arr="",input2="",input1="")
{
let found =0;
for (let i=0;i<arr.length;i++)
{
if(arr[i].siteAdress===input2.value&&arr[i].siteName==input1.value)
{
    found=1;
    return found;
}
if(arr[i].siteName===input1.value)
{
    found=2;
    return found;
}
if(arr[i].siteAdress===input2.value)
{
    found=3;
    return found;
}
}

console.log(found)
return found;

}

/////////////////////////////////////////////////adding to bookmarks/////////////////////////////////////////////////////
buttonAdd.addEventListener('click',function(){
    if(check(arr,input2,input1)==1){
        
       
        namee.classList.remove("hidden")
      addres.classList.remove("hidden")

    }
    else if(check(arr,input2,input1)==2){
        
        namee.classList.remove("hidden")
        

    }
    else if(check(arr,input2,input1)==3){
       
        addres.classList.remove("hidden")
       
    }
    ////////////////////////////////////////////////////////////check if the input syntax is correct///////////////
    else if(regex.test(input2.value)!==true)
    {

        addres.classList.remove("hidden")

    }
    else if(input1.value==="")
    {
       
        namee.classList.remove("hidden")
    }
    /////////////////////////////////////////////////////////finally adding to the array//////////////////////////////
    else{
    let obj={
        siteName:input1.value,
        siteAdress:input2.value,
    };

arr.push(obj);
localStorage.setItem('bookmarks',JSON.stringify(arr))

namee.classList.add("hidden")
addres.classList.add("hidden")


input1.value=""
input2.value=""


console.log(arr);
}});


/////////////////////////////////////////// display function/////////////////////////////////////////////////////////
 function DISPLAY(){
    let box="";
    for(let i=0;i<arr.length;i++)
    {
        box+=`<div class="container special-line mt-5 mb-5 father p-3">
        <div class="w-50 d-flex flex-row justify-content-between">
        <h2>${arr[i].siteName}</h2> <div>
        <button class="visit btn btn-outline-primary btn-sm " ><a href="${arr[i].siteAdress}" target="_blank">visit</a></button>
        <button class="del btn btn-outline-danger btn-sm" onclick="del(${i})">delete</button>
        </div>
        </div>
        </div>`
    }

    bookmarks.innerHTML=box;
    }

buttonAdd.addEventListener('click',DISPLAY)
////////////////////////////////////////////////////delete function//////////////////////////////////////////////////////
function del(index)
{
   
    if (confirm("are you sure you want to delete this bookmark 🔴🔴")) {
        arr.splice(index,1)
        localStorage.setItem('bookmarks',JSON.stringify(arr))
        DISPLAY()
    } else {
     
    }


}
//////////////////////////////////////////////////////////////delete all//////////////////////////////////////////////////
function delte_all (index=0)
{
    
     if (confirm("🔴🔴⛔are you sure you want to clear all bookmarks permanently ⛔🔴🔴")) {
        arr.splice(index,arr.length)
        localStorage.setItem('bookmarks',JSON.stringify(arr))
       
        DISPLAY()
    } 
    
    
    else {
     
    }

}

///////////////////////////////////////////////////////////search bookmarks//////////////////////////////////////////////