
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

//       crearTabla(data.standings[0].table);


//     })
//     .catch((err) => console.log(err));
// }

// getData(
//   "https://api.football-data.org/v2/competitions/2014/standings?season2022"
// );

let stats = resultados.standings[0].table;
let statsF = Rfrancesa.standings[0].table;
let statsI = Ringlesa.standings[0].table;

cuerpo_tabla= []

function principal2(results){
  crearTabla(results)
}

principal2(stats)

hideSpinner()

function crearTabla(tabla) {
  cuerpo_tabla = document.getElementById("Tbody");
  cuerpo_tabla.innerHTML = ""
  for (let i = 0; i < tabla.length; i++) {
    let tr = document.createElement("tr");

    let posicion = document.createElement("p");
    posicion.innerHTML = tabla[i].position
    console.log(posicion)

    let equipo = document.createElement("p");
    equipo.innerHTML = tabla[i].team.name
    console.log(equipo)

    let pj = document.createElement("p");
    pj.innerHTML = tabla[i].playedGames;
    console.log(pj)

    let ganados = document.createElement("p");
    ganados.innerHTML = tabla[i].won;
    console.log(ganados)

    let empatados = document.createElement("p");
    empatados.innerHTML = tabla[i].draw;
    console.log(empatados)

    let perdidos = document.createElement("p");
    perdidos.innerHTML = tabla[i].lost;
    console.log(perdidos)

    let marcados = document.createElement("p");
    marcados.innerHTML = tabla[i].goalsFor
    console.log(marcados)

    let recibidos = document.createElement("p");
    recibidos.innerHTML = tabla[i].goalsAgainst
    console.log(recibidos)


    let diferencia = document.createElement("p");
    diferencia.innerHTML = tabla[i].goalDifference
    console.log(diferencia)


    let puntos = document.createElement("p");
    puntos.innerHTML = tabla[i].points
    console.log(puntos)

    let imgEquip = document.createElement("img")
    imgEquip.setAttribute("src", tabla[i].team.crestUrl)
    imgEquip.setAttribute("class", "imagen")


    let final = [posicion, imgEquip, equipo, pj, ganados, empatados, perdidos, marcados, recibidos, diferencia, puntos]
    for (let j = 0; j < final.length; j++) {
      const td = document.createElement("td");
      td.append(final[j]);
      tr.append(td);
    }

    cuerpo_tabla.append(tr);

  }
}

// crearTabla(stats);

function hideSpinner(){
  document.getElementById("spin").style.display = "none"
  document.getElementById("spinn").style.visibility ="hidden"
}


console.log(team)


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

let ligaF2 = document.getElementById("lFranc2")
ligaF2.addEventListener("click", () => {
  // const url1 = "https://api.football-data.org/v2/competitions/2015/standings?season=2022"
  // getData(url1)

  principal2(statsF)

})


let ligaI2 = document.getElementById("inglesa2")
ligaI2.addEventListener("click", () => {
  // const url2 = "https://api.football-data.org/v2/competitions/2021/standings?season=2022"
  // getData(url2)
  principal2(statsI)

})

let ligaE2 = document.getElementById("santander2")
ligaE2.addEventListener("click", () => {
  // const url3 = "https://api.football-data.org/v2/competitions/2014/standings?season=2022"
  // getData(url3)
  principal2(stats)

})