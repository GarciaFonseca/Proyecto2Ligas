let estadisticas = [];
let estadisticas2 = [];

// function getData(url) {
//     //PASO 1 - declarar URL DE CORS 
//     const cors = "https://cors-anywhere.herokuapp.com/";
//     fetch(cors + url, {
//         method: "GET",
//         headers: new Headers({
//           "X-Auth-Token": "5ca9649556bd464fad850434ddc7eb40",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         }),
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // let partidos = data.matches

//         stats(data.matches);
//         stats2(data.matches);
//         crearTabla3(estadisticas);
//         crearTabla4(estadisticas2);



//       })
//       .catch((err) => console.log(err));
//   }

//   getData(
//     "https://api.football-data.org/v2/competitions/2014/matches?season2022"
//   );

let matches2 = partidos.matches;
let matches2I = inglesa.matches;
let matches2F = francesa.matches;

function principal3(estadistics) {
    stats(estadistics)
    crearTabla3(estadisticas);
    stats2(estadistics)
    crearTabla4(estadisticas2);

}

principal3(matches2)



// 1. Crear array vacía (será array de objetos)



// 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido, si no el null
// de los goles lo romperá todo.

hideSpinner()


function stats(estadis) {
    
    let resultadosFinales = [];

    // 2. Iterar por todos los partidos
    for (let i = 0; i < estadis.length; i++) {
        const partido = estadis[i];

        // 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido
        if (partido.status !== "FINISHED") {
            continue;
        }

        // 4. Buscar o crear el objeto del equipo local
        let homeTeamId = partido.homeTeam.id;
        let homeTeamName = partido.homeTeam.name;
        let homeTeamGoals = partido.score.fullTime.homeTeam;
        let homeTeamObj;

        for (let j = 0; j < resultadosFinales.length; j++) {
            if (resultadosFinales[j].id === homeTeamId) {
                homeTeamObj = resultadosFinales[j];
                break;
            }
        }

        if (homeTeamObj === undefined) {
            homeTeamObj = {
                id: homeTeamId,
                name: homeTeamName,
                goles: homeTeamGoals,
                partidos: 1,
            };
            resultadosFinales.push(homeTeamObj);
        } else {
            homeTeamObj.partidos++;
            homeTeamObj.goles += homeTeamGoals;
        }

        // 5. Buscar o crear el objeto del equipo visitante
        let awayTeamId = partido.awayTeam.id;
        let awayTeamName = partido.awayTeam.name;
        let awayTeamGoals = partido.score.fullTime.awayTeam;
        let awayTeamObj;

        for (let j = 0; j < resultadosFinales.length; j++) {
            if (resultadosFinales[j].id === awayTeamId) {
                awayTeamObj = resultadosFinales[j];
                break;
            }
        }

        if (awayTeamObj === undefined) {
            awayTeamObj = {
                id: awayTeamId,
                name: awayTeamName,
                goles: awayTeamGoals,
                partidos: 1,
            };
            resultadosFinales.push(awayTeamObj);
        } else {
            awayTeamObj.partidos++;
            awayTeamObj.goles += awayTeamGoals;
        }
    }

    // Crear la media de los goles. Divido los goles en el número de partidos. La línea después del let agrega el avg a resultados finales y al indicar que es = a media, agrega el valor calculado
    for (let k = 0; k < resultadosFinales.length; k++) {
        let media = (resultadosFinales[k].goles / resultadosFinales[k].partidos).toFixed(2);
        resultadosFinales[k].avg = media
    }
console.log(resultadosFinales)
    // ordena de manera descendente a partir del número de goles
    resultadosFinales.sort((a, b) => b.avg - a.avg);


    // Me corta el array donde yo se lo pido. Si le indico 5. Corta desde la posición 5 en adelante. (0,5) le da el punto de inicio y final para cortar. Empieza en la posición 0 y corta hasta la 5.
    estadisticas = resultadosFinales.slice(0, 5)

    console.log(estadisticas)
}

// stats(matches2)

function crearTabla3(tabla) {

    let cuerpo_tabla3 = document.getElementById("cuerpoT");
cuerpo_tabla3.innerHTML=""
    for (let i = 0; i < tabla.length; i++) {
        let tr3 = document.createElement("tr");

        let td_posicion = document.createElement("td");
        td_posicion.innerHTML = i + 1;

        let imgLogo = document.createElement("img");
        imgLogo.setAttribute("src", "https://crests.football-data.org/" + tabla[i].id + ".svg")
        imgLogo.setAttribute("class", "imagen")

        let td_nombre = document.createElement("td");
        td_nombre.innerHTML = tabla[i].name;

        let td_goles = document.createElement("td");
        td_goles.innerHTML = tabla[i].goles;

        let td_partidos = document.createElement("td");
        td_partidos.innerHTML = tabla[i].partidos;

        let td_media = document.createElement("td");
        td_media.innerHTML = tabla[i].avg;

        let final3 = [td_posicion, imgLogo, td_nombre, td_partidos, td_goles, td_media];

        for (let j = 0; j < final3.length; j++) {
            const td3 = document.createElement("td");
            td3.append(final3[j]);
            tr3.append(td3);
        }

        cuerpo_tabla3.append(tr3);
    }
    console.log(tabla)
}
// crearTabla3(estadisticas);


// Funcion que filtre los 5 equipos que mmenos goles ha marcado como visitante (sort de menor a mayor, sin el avg)

function stats2(estadis2) {
    
    let resultadosFinales2 = [];
    for (let i = 0; i < estadis2.length; i++) {
        const partido2 = estadis2[i];

        // 3. Condición: si el partido no está acabado, seguir y mirar siguiente partido
        if (partido2.status !== "FINISHED") {
            continue;
        }
        let awayTeamId = partido2.awayTeam.id;
        let awayTeamName = partido2.awayTeam.name;
        let awayTeamGoals = partido2.score.fullTime.awayTeam;
        let awayTeamObj;

        for (let j = 0; j < resultadosFinales2.length; j++) {
            if (resultadosFinales2[j].id === awayTeamId) {
                awayTeamObj = resultadosFinales2[j];
                // break;
            }
        }

        if (awayTeamObj === undefined) {
            awayTeamObj = {
                id: awayTeamId,
                name: awayTeamName,
                goles: awayTeamGoals,
                partidos: 1,
            };
            resultadosFinales2.push(awayTeamObj);
        } else {
            awayTeamObj.partidos++;
            awayTeamObj.goles += awayTeamGoals;
        }
    }

    // for (let k = 0; k < resultadosFinales2.length; k++) {
    //     let media = (resultadosFinales2[k].goles / resultadosFinales2[k].partidos).toFixed(2);
    //     resultadosFinales2[k].avg = media
    // }

    resultadosFinales2.sort((a, b) => a.goles - b.goles);
    estadisticas2 = resultadosFinales2.slice(0, 5)
    console.log(estadisticas2)
}
// stats2(matches2)


function crearTabla4(tabla) {
    let cuerpo_tabla4 = document.getElementById("cuerpoT2");
    cuerpo_tabla4.innerHTML=""

    for (let i = 0; i < tabla.length; i++) {
        let tr4 = document.createElement("tr");

        let td_posicion = document.createElement("td");
        td_posicion.innerHTML = i + 1;

        let imgLogo = document.createElement("img");
        imgLogo.setAttribute("src", "https://crests.football-data.org/" + tabla[i].id + ".svg")
        imgLogo.setAttribute("class", "imagen")

        let td_nombre = document.createElement("td");
        td_nombre.innerHTML = tabla[i].name;

        let td_goles = document.createElement("td");
        td_goles.innerHTML = tabla[i].goles;

        let td_partidos = document.createElement("td");
        td_partidos.innerHTML = tabla[i].partidos;



        let final4 = [td_posicion, imgLogo, td_nombre, td_partidos, td_goles];

        for (let j = 0; j < final4.length; j++) {
            const td4 = document.createElement("td");
            td4.append(final4[j]);
            tr4.append(td4);
        }

        cuerpo_tabla4.append(tr4);
    }
    console.log(tabla)
}
// crearTabla4(estadisticas2);


function hideSpinner() {
    document.getElementById("spin").style.display = "none"
    document.getElementById("spinn").style.visibility = "hidden"
}



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

let ligaF3 = document.getElementById("lFranc3")
ligaF3.addEventListener("click", () => {
    // const url3 = "https://api.football-data.org/v2/competitions/2015/standings?season=2022"
    // getData(url3)

    principal3(matches2F)

})


let ligaI3 = document.getElementById("inglesa3")
ligaI3.addEventListener("click", () => {
    // const url3 = "https://api.football-data.org/v2/competitions/2021/standings?season=2022"
    // getData(url3)
    principal3(matches2I)

})

let ligaE3 = document.getElementById("santander3")
ligaE3.addEventListener("click", () => {
    // const url3 = "https://api.football-data.org/v2/competitions/2014/standings?season=2022"
    // getData(url3)
    principal3(matches2)

})