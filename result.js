var tableEl = document.querySelector("table");
tableEl.addEventListener("click", (e)=>{
    if(!e.target.classList.contains("delBtn"))
        return;
    else{
        const btn = e.target;
        btn.closest("tr").remove();
    }
})





function addResult(){
    var classSelect = document.getElementById("classSelect").value;
    var subjectSelect = document.getElementById("subjectSelect").value;
    var studentSelect = document.getElementById("studentSelect").value;
    var marksObtained = document.getElementById("marksObtained").value;
    

    var resultsTableBody = document.getElementById("resultsTableBody");

    resultsTableBody.innerHTML +=`<tr><td>${classSelect}</td> <td>${subjectSelect}</td> <td>${studentSelect}</td> <td>${marksObtained}</td> <td><button class="delBtn">❌</button></td></tr>`
   
    
    
}
