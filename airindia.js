function myFunction(){
    <p id="demo"></p>
    const inpObj=document.getElementsByClassName("form-control");
    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML=inpObj.validationMessage;
    }
}