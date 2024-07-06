function seterror(id,errorMsg){
    var element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = errorMsg;
}

function clearFormErrors(){
    
    var i=0;
    var errors=document.getElementsByClassName("formerror");
    console.log("errors : "+errors)
    for(i=0;i<errors.length;i++){
        errors[i].innerHTML=""
    }
}

function createTown(){
    var taluka = document.getElementById("Taluka");
    console.log(taluka);
    var townSelector = document.getElementById("Town");
    console.log(townSelector);

    townSelector.innerHTML=" ";

    if(taluka.value == "North Goa")
        var towns = ["Panaji", "Mapusa", "Bicholim", "Porvorim"];
    else if (taluka.value === "South Goa") 
        var towns = ["Margao", "Vasco da Gama", "Ponda", "Curchorem"];
    else
        var towns=[]

    towns.forEach((town)=>{
        var option=document.createElement("option");
        option.textContent=town;
        option.value=town;
        townSelector.appendChild(option);
    })
}



function validateForm(){

    clearFormErrors();
    var digit = /\d/;
    var addressRExp = /^[a-zA-Z0-9\s\-.,#]+$/
    var fname = document.forms['myform']['fname'].value;
    var lname = document.forms['myform']['lname'].value;
    var mname = document.forms['myform']['mname'].value;
    var gender=document.forms['myform']['gender'];
    var momname=document.forms['myform']['momname'].value;
    var dadname=document.forms['myform']['dadname'].value;
    var address=document.forms['myform']['address'].value;
    
    if(fname.trim()=='')
        seterror("fname","*PLease enter a valid name for this field");
    if(digit.test(fname))
        seterror("fname","*A name cannot consist of a digit");

    if(digit.test(mname))
        seterror("mname","*A name cannot have a digit");

    if(lname.trim()=='')
        seterror("lname","*PLease enter a valid Sirname for this field");
    if(digit.test(lname))
        seterror("lname","*A name cannot consist of a digit");

    if(gender[0].checked==false && gender[1].checked==false)
        seterror("gender","*PLease enter a valid gender for this field");

    if(momname.trim()=='')
        seterror("momname","*PLease enter a valid name for this field");
    if(digit.test(momname))
        seterror("momname","*A name cannot have a digit");

    if(dadname.trim()=='')
        seterror("dadname","*PLease enter a valid Sirname for this field");
    if(digit.test(dadname))
        seterror("dadname","*A name cannot have a digit");

    if(address.trim()=='')
        seterror("address","*PLease enter your Address here");
    if(addressRExp.test(address))
        seterror("address","Please enter a valid address");


    return false;
}


