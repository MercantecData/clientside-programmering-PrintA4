var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("time").innerHTML = date;


function vindstyrkeMål() {
    var enhed1 = document.getElementById("vind")
    window.prompt("vind: ")
    vind = parseFloat(vind)

}

function køretøjsVægt() {
    var enhed2 = document.getElementById("vægt")
    window.prompt("vægt: ")
    vægt = parseFloat(vægt)
    

}

function beregn() {
    var tryk = document.getElementById("beregn")


}

