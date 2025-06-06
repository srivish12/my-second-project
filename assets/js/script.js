const dialog = document.getElementById("dialog");
const insertBtn = document.getElementById("insertBtn");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const tableBody = document.getElementById("tableBody");


let records=[];

insertBtn.addEventListener("click", () => {
  dialog.style.display = "flex";
});

document.getElementById("close").addEventListener("click", () => {
  dialog.style.display = "none";
});

function setDate(now= new Date()) {
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  date.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}
setDate();

function saveRecord(type) {
  let val;
  if (type == "income") {
    val = parseFloat(amount.value);
  } else {
    val = -parseFloat(amount.value);
  }
  let record = {
    date: new Date(date.value),
    description: description.value,
    amount: val,
  };
  console.log(record);
  records.push(record);

  localStorage.setItem("records",JSON.stringify(records));

  dialog.style.display='none';
  setDate();
  description.value="";
  amount.value="";

  displayRecords();

}



document.getElementById("incomeBtn").addEventListener("click", () => {
  saveRecord("income");
});

document.getElementById("expenseBtn").addEventListener("click", () => {
  saveRecord("expense");
});

function displayRecords(){

    records = localStorage.getItem("records");
    if(records){
      records = JSON.parse(records);
    } else{
      records=[];
    }

    tableBody.innerHTML="";
    records.forEach((record, index )=>{
        let clone = document.getElementById("rowTemplate").content.cloneNode(true);
        clone.querySelector(".date-time").textContent= new Date(record.date).toLocaleString();
        clone.querySelector(".description").textContent= record.description;
        clone.querySelector(".amountOfTransaction").textContent= record.amount.toFixed(2);

        clone.querySelector(".edit").addEventListener('click',()=>{
          setDate(new Date(record.date));
          description.value= record.description;
          amount.value= record.amount;
          dialog.style.display= "flex";
          records.splice(index,1);
          localStorage.setItem("records",JSON.stringify(records));

        })
        clone.querySelector(".delete").addEventListener('click',()=>{
          if (!confirm("Are you sure?")){
            return;
          }
         records.splice(index,1);
         localStorage.setItem("records",JSON.stringify(records));
        displayRecords();
        })

         tableBody.appendChild(clone);

    })
}
    displayRecords();