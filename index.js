/*REVIEW - 1) Seçim etmək */
const oyunçu_skor = document.getElementsByClassName("oyunçu_skor")[0];
const kompüter_skor = document.getElementsByClassName("kompüter_skor")[0];
const daş = document.getElementById("daş");
const kağız = document.getElementById("kağız");
const qayçı = document.getElementById("qayçı");
const oyunçu_seçimi = document.getElementById("oyunçu_seçimi");
const kompüter_seçimi = document.getElementById("kompüter_seçimi");
const mesaj = document.getElementsByClassName("mesaj")[0];


/*REVIEW - 2) */
let oyunçu = 0;
let kompüter = 0;

function kompüterSeçim() {
    const seçim = ["daş", "kağız", "qayçı"]
    const randomSay = Math.floor(Math.random() * 3)
    //  console.log(randomSay);
    kompüter_seçimi.setAttribute("src", `images/${seçim[randomSay]}.png`)
    return seçim[randomSay];
}
// kompüterSeçim()


function eventListeners() {

    daş.addEventListener("click", function () {
        oyunçu_seçimi.setAttribute("src", `images/daş.png`)
        // kompüterSeçim();
        let kom_seçim = kompüterSeçim();
        nəticə("daş", kom_seçim)
    })

    kağız.addEventListener("click", function () {
        oyunçu_seçimi.setAttribute("src", `images/kağız.png`)
        // kompüterSeçim()
        let kom_seçim = kompüterSeçim();
        nəticə("kağız", kom_seçim)
    })

    qayçı.addEventListener("click", function () {
        oyunçu_seçimi.setAttribute("src", `images/qayçı.png`)
        // kompüterSeçim()
        let kom_seçim = kompüterSeçim();
        nəticə("qayçı", kom_seçim)
    })
}
eventListeners()


// Oyunun Nəticə'ləri
function nəticə(o, k) {
    switch (o + k) {
        case "daşqayçı":
        case "kağızdaş":
        case "qayçıkağız":
            qazan();
            break;

        case "daşkağız":
        case "kağızqayçı":
        case "qayçıdaş":
            uduz();
            break;

        case "daşdaş":
        case "kağızkağız":
        case "qayçıqayçı":
            bərabərə();
            break;

        default: "XƏTAAA";
    }
}

function qazan() {
    oyunçu = oyunçu + 1;
    mesaj.innerHTML = "TƏBRİKLƏR SƏN QAZANDIN 😍";
    oyunçu_skor.innerHTML = oyunçu.toString()
}

function uduz() {
    kompüter = kompüter + 1;
    mesaj.innerHTML = "TƏƏSSÜF Kİ KOMPÜTER QAZANDI 😥";
    kompüter_skor.innerHTML = kompüter.toString()
}

function bərabərə() {
    mesaj.innerHTML = "BƏRABƏRƏ 😑";
}