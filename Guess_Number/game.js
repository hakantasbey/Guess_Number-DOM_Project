
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
    }

})