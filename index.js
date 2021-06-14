$(document).ready(() => {
    $("#btc-button").click(() => {
        console.log("btc clicked!")
        $("#btc").fadeToggle("slow");
    })
})