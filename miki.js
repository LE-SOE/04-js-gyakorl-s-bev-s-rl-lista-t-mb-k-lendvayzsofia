function koszones () {
    

    let szovegElem = document.getElementById("szoveghelye")
    szovegElem.innerHTML = "Köszönjük szépen"


    let neved = document.getElementById("neved").value
    document.getElementById("neved_ki").innerHTML = neved


    let szovegElem2 = document.getElementById("szoveghelye2")
    szovegElem2.innerHTML = "! Így már tudni fogjuk, jó gyerek voltál-e az évben, és ha igen, azt is, hogy hová szállítsuk az ajándékaidat! Apropó, ajándék! Kezdd el írni a listádat a Mikulásnak. De vigyázz! Ne akarj túl sok mindent, mert a Mikulás egyszerre csak 5 dolgot tud kiszállítani a kis segédeivel. Tehát összesen öt dolgot kérhetsz, szóval jól gondold meg őket!"


    let gomb = document.getElementById("lista")
        gomb.style.display = "inline"

}
function listara() {
     let adat = document.getElementById("neved").value
    localStorage.setItem("nev", adat)

    let adat1 = document.getElementById("korod").value
    localStorage.setItem("kor", adat1)

    let adat2 = document.getElementById("helyed").value
    localStorage.setItem("hely", adat2)

    window.location.href = "a.lista.html"
}