const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");

btnPrimary.addEventListener("click",agreeFunction);
btnSecondary.addEventListener("click",disagreFunction);

function agreeFunction(){
   document.location.href="./account deleted.html";

}
