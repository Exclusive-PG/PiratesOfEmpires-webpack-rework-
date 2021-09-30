const BtnAlertMessage      =    document.getElementById("BtnAlertMessage");
const AlertMessage         =    document.getElementById("AlertMessage");
BtnAlertMessage.addEventListener("click",removeAlert=()=>{
    AlertMessage.style.display="none";
})