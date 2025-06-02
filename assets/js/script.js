const dialog= document.getElementById("dialog");
const insertBtn =document.getElementById("insertBtn");
const date= document.getElementById("date");
const amount=document.getElementById("amount");

insertBtn.addEventListener("click",()=> {
    dialog.style.display="flex";
})

document.getElementById("close").addEventListener("click",()=>{
    dialog.style.display="none";
})

function setNow(){
    let now= new Date();
    let year=now.getFullYear();
    let month=(now.getMonth() + 1).toString().padStart(2, '0');
    let day=now.getDate().toString().padStart(2, '0');
    let hours=now.getHours().toString().padStart(2, '0');
    let minutes=now.getMinutes().toString().padStart(2, '0');
    date.value= `${year}-${month}-${day}T${hours}:${minutes}`;
}
setNow();

function saveRecord(type){
    let val;
    if(type == "income"){
        val=parseFloat(amount.value);
    }else {
    val=-parseFloat(amount.value);
    }
    let record={
        date:new Date(date.value),
        description:description.value,
        amount:val
    };
    console.log(record);
} 

document.getElementById("incomeBtn").addEventListener("click",()=>{
    saveRecord("income");
});

document.getElementById("expenseBtn").addEventListener("click",()=>{
    saveRecord("expense");
});