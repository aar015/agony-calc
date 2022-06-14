document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", () => {
        const life = 1. * document.getElementById("life").value;
        const n = Math.ceil((Math.sqrt(1. + 8. * life) - 1.) / 2.);
        const card = 1. * document.getElementById("card").value;
        const agony = 1. * document.getElementById("agony").value;
        let result = 10000.;
        if (agony < n) {
            result = 0;
        } else {
            for(let i=1.; i <= card; i++) {
                result *= (agony - n + i) / (agony + i);
            }
        }
        result = Math.round(result) / 100.;
        document.getElementById("output").innerText = result + "%  chance of lethal";
        if (result < 50) {
            document.getElementById("output").className = "bad";
        }
        else {
            document.getElementById("output").className = "good";
        }
    });
});