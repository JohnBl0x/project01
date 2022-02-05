
setInterval(displayTime,1000)

function displayTime (){
    let today = new Date()
    document.getElementById("time").innerHTML = today.toLocaleTimeString()
}



console.log(displayTime());