

// function galleryspin(sign) {
//     const angle = 0;
//     console.log(sign);
//     spinner = document.getElementById("spinner");
//     if (!sign) {
//         angle = angle + 45;
//     } else {
//         angle = angle - 45;
//     }
//     spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
// }




console.log(team)

hideSpinner()
const divEquipos = document.getElementById("contenedor-nav")

function createTeams(equipo) {


    for (let i = 0; i < equipo.length; i++) {
        let linkE = document.createElement("a")
        linkE.setAttribute("href", equipo[i].website)
        // linkE.href = equipo[i].website
        linkE.target = "_blank"


        let boxE = document.createElement("div")
        // boxE.classList.add("col")
        // boxE.classList.add("fila2")
console.log(boxE)

        let imgE = document.createElement("img")
        imgE.setAttribute("src", equipo[i].crest)
        imgE.classList.add("imgL")


        boxE.append(imgE)
        linkE.append(boxE)
        divEquipos.append(linkE)
    }
}

createTeams(team.teams)









// Fetch

// const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
// const yourUrl =
//     "https://api.football-data.org/v4/matches";

// fetch(corsAnywhere + yourUrl, {
//         method: "GET",
//         headers: new Headers({
//             "X-Auth-Token": "5ca9649556bd464fad850434ddc7eb40",
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//         }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.teams)
//         createTeams(data.teams)
//     })
//     .catch((err) => console.log(err));





// Tabla de proximos partidos

//   function crearEquipo(equipo){
//    const divPartido = document.getElementById("box1")
//    for (let i = 0; i < equipo.length; i++) {

//     let boxP = document.createElement("div")
//     boxP.classList.add("bg-primary", "mb-2")

//     let equipos = document.createElement("p")
//     equipos.innerHTML = equipo[i].homeTeam.name + "-" + equipo[i].awayTeam.name

//     let fecha = new Date(equipo[i].utcDate)
//     fecha.toLocaleString()

//     boxP.append(equipos)
//     boxP.append(fecha)
//     divPartido.append(boxP)

//    }

function hideSpinner(){
    document.getElementById("spin").style.display = "none"
    document.getElementById("spinn").style.visibility ="hidden"
  }