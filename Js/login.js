function checkAndNextPage() {
    let use = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (checkUse(use,pass)) {
        location.replace("http://localhost:63342/Case%20Study/CaseStudy.html?_ijt=g2h2gne5miamob8vgai4963b52");
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