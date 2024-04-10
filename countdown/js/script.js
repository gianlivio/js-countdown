function iniziaCountdown() {
    let tempoRimanente = 10;
    let ritardo = 1000;


    document.getElementById('display').textContent = tempoRimanente;

    const intervallo = setInterval(function() {
        tempoRimanente -= 1;
        


        if (tempoRimanente > 0) {
            console.log(tempoRimanente); 
        } else {
            console.log("Buon Anno!"); 
            clearInterval(intervallo); 
        }
    }, ritardo);
}

iniziaCountdown();