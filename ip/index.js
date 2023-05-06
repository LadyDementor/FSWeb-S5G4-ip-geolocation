//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
iş7	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>



	
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
axios
  .get(" https://apis.ergineer.com/ipgeoapi/159.146.43.168")
  .then((response) => {
    const ipGeoData = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />	
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

const parentDiv = document.createElement("div");
parentDiv.className = "card";

const img = document.createElement("img");
img.src =
  "data:image/png;base64,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";

const childDiv = document.createElement("div");
childDiv.className = "card-info";

const ipadresi = document.createElement("h3");
ipadresi.textContent = "78.174.109.23";

const country = document.createElement("p");
country.textContent = "Turkey(Tr)";

const enlemBoylam = document.createElement("p");
enlemBoylam.textContent = "Enlem:36.7689999999999    Boylam:34.674300000";

const sehir = document.createElement("p");
sehir.textContent = "Mersin";

const saatDilimi = document.createElement("p");
saatDilimi.textContent = "Europa/Istanbul";

const paraBirimi = document.createElement("p");
paraBirimi.textContent = "TRY";

const isp = document.createElement("p");
isp.textContent = "TurkTelecom";

childDiv.appendChild(ipadresi);
childDiv.appendChild(country);
childDiv.appendChild(enlemBoylam);
childDiv.appendChild(sehir);
childDiv.appendChild(paraBirimi);
childDiv.appendChild(saatDilimi);
childDiv.appendChild(isp);

parentDiv.appendChild(img);
parentDiv.appendChild(childDiv);

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

ipAdresimiAl().then(() => {
  const url = `https://apis.ergineer.com/ipgeoapi/${benimIP}`;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      const card = data(response.data);

      const cardsContainer = document.querySelector(".cards");

      cardsContainer.appendChild(card);
    })
    .catch((error) => {
      console.log(error);
    });

  function data(cardData) {
    const ulkeCard = document.createElement("div");
    ulkeCard.classList.add("card");

    const ulkeBayragi = document.createElement("img");
    ulkeBayragi.src = cardData.ülkebayrağı;
    ulkeCard.appendChild(ulkeBayragi);

    const ulkeData = document.createElement("div");
    ulkeData.classList.add("card-info");
    ulkeCard.appendChild(ulkeData);

    const ulkeIp = document.createElement("h3");
    ulkeIp.textContent = cardData.sorgu;
    ulkeData.appendChild(ulkeIp);

    const ulkeBilgi = document.createElement("p");
    ulkeBilgi.classList.add("ulke");
    ulkeBilgi.textContent = cardData.ülkeKodu;
    ulkeData.appendChild(ulkeBilgi);

    const ulkeEnlem = document.createElement("p");
    ulkeEnlem.textContent = `Enlem: ${cardData.enlem} Boylam: ${cardData.boylam}`;
    ulkeData.appendChild(ulkeEnlem);

    const ulkedekiSehir = document.createElement("p");
    ulkedekiSehir.textContent = `Şehir: ${cardData.şehir}`;
    ulkeData.appendChild(ulkedekiSehir);

    const ulkeSaatDilimi = document.createElement("p");
    ulkeSaatDilimi.textContent = cardData.saatdilimi;
    ulkeData.appendChild(ulkeSaatDilimi);

    const ulkeParaBirimi = document.createElement("p");
    ulkeParaBirimi.textContent = cardData.parabirimi;
    ulkeData.appendChild(ulkeParaBirimi);

    const ulkeIsp = document.createElement("p");
    ulkeIsp.textContent = cardData.isp;
    ulkeData.appendChild(ulkeIp);
    return ulkeCard;
  }
});
