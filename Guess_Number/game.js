
//? Pc ye 1-20 arasinda sayi tutturduk.
let rastgeleSayi = Math.ceil(Math.random()*20)
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg")

let skor = 10; //* skor u index.html den çekebilirdik. Ama çok kullanacağımız için bu daha tercih edilen bir yol.

let enYuksekSkor = 0 ;

//? Her Check butonuna basıldığında yapılacaklar
document.querySelector(".check").addEventListener("click",()=>{

    const tahmin = document.querySelector(".guess").value
    console.log(tahmin);

    //! Tahmin girmeden butona basıldıysa
    if(!tahmin){
        mesaj.textContent = "Lutfen bir sayi giriniz"
    //! Tahmin Doğruysa
    }else if(tahmin==rastgeleSayi){
        mesaj.textContent = "Tebrikler Bildiniz👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi

    //? Top Score Kontrolü
    if(skor > enYuksekSkor){
        enYuksekSkor = skor
        document.querySelector(".top-score").textContent = enYuksekSkor
    }

    //! Tahmin Yanlışsa
    }else{
     //? Skor 1'den büyük olduğu sürece tahmin hakkım var

     if(skor>1){
        skor-- ;
        document.querySelector(".score").textContent = skor

        tahmin < rastgeleSayi 
        ? mesaj.textContent = "Arttir👆" 
        : mesaj.textContent = "Azalt👇"

     }else{
        mesaj.textContent = "Oyunu Kaybettiniz 🥺"
        document.querySelector(".score").textContent = 0
        document.querySelector("body").style.backgroundColor = "red"
        //!Oyunu Kaybettiniz
     }

    }

})

//? Again butonuna basınca ayarlar başlangıç değerlerine kurulsun. Arka plan #2d3436 olsun

document.querySelector(".again").onclick = ()=>{
    document.querySelector("body").style.backgroundColor = "#2d3436"

    rastgeleSayi = Math.ceil(Math.random()*20)
    console.log(rastgeleSayi);

    skor = 10
    document.querySelector(".score").textContent = skor

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = ""

    mesaj.textContent = "Oyun yeni oyuncu için başlıyor"
}


//! ENTER
//? Klavyeden enter buttonuna basıldığında check butonunu tetikle.

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        //*Enter tuşuna basıldığında check butonunu tıkla
        document.querySelector(".check").click()
    }
})


//? Data larin depolanmasi(Application bolumunde)
// localStorage.setItem("harvey",10)
// console.log(localStorage.getItem("harvey"));