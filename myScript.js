let db = 0
let termekek =['tej','vaj','kenyér','kávé'
]

function reset() {
    let gomb = document.getElementById("ujgomb");
         gomb.style.display = "inline" ;
    console.log ('Termékek változó',termekek)
    console.log ('Ez a kenyér?',termekek[2])
    let blista = document.getElementById("bev_lista")

    

    for (termek of termekek) {
        console.log(termekek)
        blista.innerHTML += `<li>${termek}</li>`



    }
db = termekek.length;
document.getElementById("darab").innerHTML = db;
console.log('Alap termékek hozzáadva, darab', db);
    
}

function hozzaad() {
        let cuccneve = document.getElementById("cucc").value
        let blista = document.getElementById("bev_lista")
         //blista.innerHTML = blista.innerHTML + `<li>${cuccneve}</li>`
        blista.innerHTML += `<li>${cuccneve}</li>`

        if (cuccneve) {
            blista.innerHTML += `<li>${cuccneve}</li>`;
            db +=1;
            
        
        document.getElementById("darab").innerHTML = db
        console.log("darab:",db)
        } 
    }