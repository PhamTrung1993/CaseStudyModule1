function checkAndNextPage() {
    let use = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (checkUse(use,pass)) {
        location.replace("http://localhost:63342/Case%20Study/CaseStudy/CaseStudy.html?_ijt=p9sc9bcjsobltvdk9r879pr6ib");
    }
    else {
        alert("Use hoặc Password đang sai! Hãy nhập lại")
    }
}
function checkUse(use,pass) {
    if ((use === '1') && (pass ==='1')) {
        return  true;
    }
    return false
}