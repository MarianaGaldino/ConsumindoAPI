var url = "https://api.covid19api.com/dayone/country/brazil";


window.onload = function(){
    this.criaCard("content");
}

function criaCard(content){

    callAPI (url, function(status, data){

        document.getElementById(content).innerHTML += "<h1> Consumindo API Covid 19</h1> <br>"

        for (var i=0; i< data.length; i++){
            let country = data[i].Country
            let confirmed = data[i].Confirmed
            let deaths = data[i].Deaths
            let recovered = data[i].Recovered
            let active = data[i].Active
            let date = data[i].Date
            
            
            document.getElementById(content).innerHTML += "<div class= column> <div class=card>" +
            "<h3>" + country + "</h3>" + 
            "<p> Em: " + new Date(date).toLocaleDateString('pt-br') + "</p>" +
            "<p> Confirmados: " + confirmed + "</p>" +
            "<p> Mortes: " + deaths + "</p>" +
            "<p> Casos Ativos: " + active + "</p>" +
            "<p> Recuperados: " + recovered + "</p>" +
            
            "</div></div>";
        }    

    });
}

function callAPI(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            callback(xhr.status, xhr.response);
        } else {
            alert("Problemas em conectar com o servidor.");
        }
    }
    xhr.send();
}

