let check = document.querySelector("#subscribe");
check.addEventListener("click", function(){
    if (check.checked){
        document.querySelector("#emailDiv").style.display="block";
    } else {
        document.querySelector("#emailDiv").style.display="none";
    }
});
// color of the day: Tangerine //  