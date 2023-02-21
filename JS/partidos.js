// function getData(url) {
//   //PASO 1 - declarar URL DE CORS 
//   const cors = "https://cors-anywhere.herokuapp.com/";
//   fetch(cors + url, {
//       method: "GET",
//       headers: new Headers({
//         "X-Auth-Token": "5ca9649556bd464fad850434ddc7eb40",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // let partidos = data.matches

//       crearTabla2(data.matches);

//       let boton = document.getElementById("search")
//       boton.addEventListener("keyup", function () {
//         filterTableFunc(matches)
//       });

//       let botonr = document.getElementById("resetvalues")
//       botonr.addEventListener("click", () => {
//         reset()
//         crearTabla2(matches)
//       })
//     })
//     .catch((err) => console.log(err));
// }

// getData(
//   "https://api.football-data.org/v2/competitions/2014/matches?season2022"
// );


let matchesI = inglesa.matches;
let matchesF = francesa.matches;
let matches = partidos.matches;

let arrayEquipo = []

function principal(ligas) {

  crearTabla2(ligas);



  let boton = document.getElementById("search")
  boton.addEventListener("keyup", function () {
    filterTableFunc(ligas)
  })


  let botonr = document.getElementById("resetvalues")
  botonr.addEventListener("click", () => {
    reset()
    crearTabla2(ligas)
  })

}
principal(matches)




console.log(matches);

hideSpinner()

function crearTabla2(tabla) {
  let cuerpo_tabla2 = document.getElementById("bodyT");
  cuerpo_tabla2.innerHTML = ""
  for (let i = 0; i < tabla.length; i++) {
    let tr2 = document.createElement("tr");

    let jornada = document.createElement("p");
    jornada.innerHTML = tabla[i].matchday;
    console.log(jornada)

    let equipoLocal = document.createElement("p");
    equipoLocal.innerHTML = tabla[i].homeTeam.name;
    console.log(equipoLocal)

    let equipoVisita = document.createElement("p");
    equipoVisita.innerHTML = tabla[i].awayTeam.name;
    console.log(equipoVisita)



    let resultado = tabla[i].score.fullTime.homeTeam + "-" + tabla[i].score.fullTime.awayTeam;
    if (resultado === "null-null") {
      resultado = "Por jugar"
    } else {
      resultado.textContent = tabla[i].score.fullTime.homeTeam + "-" + tabla[i].score.fullTime.awayTeam
    }



    let fecha = new Date(tabla[i].utcDate);
    console.log(fecha)

    let imgLocal = document.createElement("img");
    imgLocal.setAttribute("src", "https://crests.football-data.org/" + tabla[i].homeTeam.id + ".svg")
    imgLocal.setAttribute("class", "imagen")

    let imgVisit = document.createElement("img");
    imgVisit.setAttribute("src", "https://crests.football-data.org/" + tabla[i].awayTeam.id + ".svg")
    imgVisit.setAttribute("class", "imagen")

    let final2 = [jornada, imgLocal, equipoLocal, imgVisit, equipoVisita, resultado, fecha.toLocaleString()]
    for (let j = 0; j < final2.length; j++) {
      const td2 = document.createElement("td");
      td2.append(final2[j]);
      tr2.append(td2);
    }

    cuerpo_tabla2.append(tr2);

  }
}












let alerta1 = document.getElementById("alerta1")
let alerta2 = document.getElementById("alerta2")



alerta1.style.display = "none"
alerta2.style.display = "none"



function filterTableFunc(games) {
  let datosEntrada = document.getElementById("search");
  // La línea para eliminar la alerta 2 va aquí porque esta es la condición que valida que haya un valor en el input. 
  // Como yo quiero que la alerta desaparezca cuando se ingrese un nombre en el input, se aplica la condición a esta regla. 
  alerta2.style.display = "none";

  arrayEquipo = games.filter((partido) => {
    if (
      partido.homeTeam.name
      .toLowerCase()
      .includes(datosEntrada.value.toLowerCase()) ||
      partido.awayTeam.name.toLowerCase().includes(datosEntrada.value.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (arrayEquipo.length === 0) {
    alerta1.style.display = "block"
    return crearTabla2(matches);
  }
  alerta1.style.display = "none";
  crearTabla2(arrayEquipo)

}


// Filtro por radio botones

function botonRadio() {
  // console.log(arrayEquipo.length)
  let datosEntrada = document.getElementById("search");
  let radioboton = document.querySelector("input[type=radio]:checked");

  if (!datosEntrada.value) {
    radioboton.checked = false;
    alerta2.style.display = "block"
    return crearTabla2(matches);
  }

  let arrayPartidos = arrayEquipo.filter((part) => {
    if (radioboton.value === "Ganados") {
      if ((part.homeTeam.name.toLowerCase().includes(datosEntrada.value.toLowerCase()) && part.score.winner == "HOME_TEAM") ||
        (part.awayTeam.name.toLowerCase().includes(datosEntrada.value.toLowerCase())) && part.score.winner == "AWAY_TEAM") {
        return true
      }
    }

    if (radioboton.value === "Perdidos") {
      if ((part.homeTeam.name.toLowerCase().includes(datosEntrada.value.toLowerCase()) && part.score.winner == "AWAY_TEAM") ||
        (part.awayTeam.name.toLowerCase().includes(datosEntrada.value.toLowerCase())) && part.score.winner == "HOME_TEAM") {
        return true
      }
    }


    if (part.score.winner === "DRAW" && radioboton.value === "Empatados") {
      return true
    }

    if (part.status === "SCHEDULED" && radioboton.value === "Proximos") {
      return true
    }

  });

  if (arrayPartidos.length === 0) {
    alerta2.style.display = "block";
    return crearTabla2(matches);
  }


  crearTabla2(arrayPartidos)

}






// Boton y función reset values

function reset() {
  document.getElementById("search").value = "";

  let botones = document.getElementsByName("inlineRadioOptions")
  alerta1.style.display = "none"
  alerta2.style.display = "none"
  for (let i = 0; i < botones.length; i++) {
    botones[i].checked = false
  }
}


// let botonr = document.getElementById("resetvalues")
// botonr.addEventListener("click", () => {
//   reset()
//   crearTabla2(matches)
// })

// Esconder spinner

function hideSpinner() {
  document.getElementById("spin").style.display = "none"
  document.getElementById("spinn").style.visibility = "hidden"
}

// Crear escudos de equipos
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


// Crear otras ligas 

let ligaF = document.getElementById("lFranc")
ligaF.addEventListener("click", () => {
  // const url1 = "https://api.football-data.org/v2/competitions/2015/matches?season=2022"
  // getData(url1)

  principal(matchesF)

})


let ligaI = document.getElementById("inglesa")
ligaI.addEventListener("click", () => {
  // const url2 = "https://api.football-data.org/v2/competitions/2021/matches?season=2022"
  // getData(url2)
  principal(matchesI)

})

let ligaE = document.getElementById("santander")
ligaE.addEventListener("click", () => {
  // const url3 = "https://api.football-data.org/v2/competitions/2014/matches?season=2022"
  // getData(url3)
  principal(matches)

})
