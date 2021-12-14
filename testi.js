let olio = {
    nimi: "Reima",
    sukunimi: "Riihimäki"
}

olio.age = 23;

testi(olio);

let ar = [
    { nimi: "Reima", sukunimi: "Riihimäki"},
    { nimi: "Liisa", sukunimi: "Ihmemaa" },
    olio
]

console.log(ar);

function testi(person){
    person.nimi = "Reymond";
}