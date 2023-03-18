// NAVBAR TOGGLE
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// POPUP LOGIN
document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

document.getElementById("close-icon").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

const dugme = document.getElementById("dugme");
if (dugme !== null) {
  let lozinka = document.getElementById("lozinka");
  let korime = document.getElementById("korIme");

  dugme.addEventListener("click", (e) => {
    e.preventDefault();

    if (korime.value == "admin" && lozinka.value == "admin") {
      document.location.href = "admin.html";
    } else {
      alert("GRESKA!");
    }
  });
}

// IMAGE SLIDER

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length == 0) {
    return;
  }

  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ADMIN CHART
var auto = function (marka, godiste, gorivo, cena) {
  this.marka = marka;
  this.godiste = godiste;
  this.gorivo = gorivo;
  this.cena = cena;
};

var automobili = [
  new auto("Audi", 2016, "Dizel", 14000),
  new auto("Audi", 2010, "Benzin", 7000),
  new auto("Audi", 2006, "Dizel", 5000),
  new auto("Audi", 2010, "Dizel", 11000),
  new auto("BMW", 2011, "Dizel", 10000),
  new auto("BMW", 2010, "Dizel", 14300),
  new auto("BMW", 2009, "Benzin", 9000),
  new auto("BMW", 2006, "Dizel", 6000),
  new auto("Mercedes Benz", 2014, "Benzin", 10000),
  new auto("Mercedes Benz", 2011, "Dizel", 10500),
  new auto("Mercedes Benz", 2010, "Dizel", 12000),
  new auto("Mercedes Benz", 2011, "Benzin", 10000),
];

if (localStorage.getItem("automobili") == null) {
  localStorage.setItem("automobili", JSON.stringify(automobili));
}

// PRETRAGA AUTOMOBILA (FILTER)

var ocisti = () => {
  var bmw = document.getElementsByClassName("bmw");
  for (var i = 0; i < bmw.length; i++) {
    bmw[i].style.display = "none";
  }
  var audi = document.getElementsByClassName("audi");
  for (var i = 0; i < audi.length; i++) {
    audi[i].style.display = "none";
  }
  var mercedes = document.getElementsByClassName("mercedes");
  for (var i = 0; i < mercedes.length; i++) {
    mercedes[i].style.display = "none";
  }
};

var pretrazi = document.getElementById("pretrazi");
if (pretrazi !== null) {
  pretrazi.addEventListener("click", (e) => {
    e.preventDefault();
    ocisti();
    var izbor = document.getElementById("marka").value;
    var elem = document.getElementsByClassName(izbor);
    var model = document.getElementById("model").value;
    var karoserija = document.getElementById("karoserija").value;
    var gorivo = document.getElementById("gorivo").value;

    var cena = document.getElementById("cena").value;
    var godiste = document.getElementById("godiste").value;

    let cars = carFilters(izbor, model, karoserija, gorivo, cena, godiste);

    showCarsData(cars);
  });
}

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

// MODELI ZA SVAKU MARKU
var marka = document.getElementById("marka");
if (marka != null) {
  marka.addEventListener("change", (e) => {
    var vrednost = e.target.value;
    var model = document.getElementById("model");
    removeOptions(model);
    if (vrednost == "bmw") {
      var opt = document.createElement("option");
      opt.value = "svi";
      opt.innerHTML = "Svi modeli";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "s1";
      opt.innerHTML = "Serije 1";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "s3";
      opt.innerHTML = "Serije 3";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "s5";
      opt.innerHTML = "Serije 5";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "s7";
      opt.innerHTML = "Serije 7";
      model.appendChild(opt);
    }
    if (vrednost == "audi") {
      var opt = document.createElement("option");
      opt.value = "svi";
      opt.innerHTML = "Svi modeli";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "a3";
      opt.innerHTML = "A3";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "a4";
      opt.innerHTML = "A4";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "a5";
      opt.innerHTML = "A5";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "a6";
      opt.innerHTML = "A6";
      model.appendChild(opt);
    }
    if (vrednost == "mercedes") {
      var opt = document.createElement("option");
      opt.value = "svi";
      opt.innerHTML = "Svi modeli";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "a180";
      opt.innerHTML = "A 180";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "e250";
      opt.innerHTML = "E 250";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "c220";
      opt.innerHTML = "C 220";
      model.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = "e200";
      opt.innerHTML = "E 200";
      model.appendChild(opt);
    }
  });
}

// DUGME kola

let page_path = window.location.pathname;
let page_query = window.location.href;

page_query = page_query.split("?");

if (page_query.length > 1) {
  page_query = page_query[1].split("=");

  if (page_query[0] === "car") {
    let car_id = page_query[1];

    let cars_data = getAllCars();

    for (const key in cars_data) {
      if (car_id == cars_data[key].car_id) {
        let carHtml =
          `<div class="cars-background">
        <div class="image-cars">
          <h2><strong>` +
          cars_data[key].car_name +
          `</strong> ` +
          cars_data[key].car_year +
          `. Godiste</h2>
          <img src="` +
          cars_data[key].car_image +
          `" />
        </div>
        <div class="info-cars">
          <h2>Opste Informacije</h2>
          <p>Marka vozila: ` +
          cars_data[key].car_brand +
          `</p>
          <p>Model vozila: ` +
          cars_data[key].car_model +
          `</p>
          <p>Godiste vozila: ` +
          cars_data[key].car_year +
          `.</p>
          <p>Karoserija: ` +
          cars_data[key].car_type +
          `</p>
          <p>Gorivo: ` +
          cars_data[key].car_fuel +
          `</p>
          <p>Strana volana: Leva</p>
          <p>Registrovan do: Nije registrovan</p>
          <p>Ostecenje: Nije ostecen</p>
          <h2>Cena: ` +
          cars_data[key].car_price +
          `&euro;</h2>
        </div>
      </div>`;

        document.getElementsByTagName("main")[0].innerHTML = carHtml;

        break;
      }
    }
  }
}
if (document.getElementById("wrapper") !== null) {
  showCarsData(getAllCars());
}

function getAllCars() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "cars.json", false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function showCarsData(cars_data) {
  var carsHtml = "";
  for (const element in cars_data) {
    console.log(cars_data[element]);
    carsHtml +=
      `<div class="card">
  <img src="` +
      cars_data[element].car_image +
      `" alt="Avatar" style="width:100%">
  <div class="car-card">
    <h4><b>` +
      cars_data[element].car_name +
      `</b></h4>
    <p>` +
      cars_data[element].car_year +
      `. Godiste</p>
    <p>` +
      cars_data[element].car_fuel +
      `</p>
    <p>` +
      cars_data[element].car_type +
      `</p>
    <p><strong>` +
      cars_data[element].car_price +
      `&euro;</strong></p>
    <a href='cars.html?car=` +
      cars_data[element].car_id +
      `'><button type="button" class="car-button">Detaljnije...</button></a>
  </div>
</div>`;
  }
  document.getElementById("wrapper").innerHTML = carsHtml;
}

function carFilters(izbor, model, karoserija, gorivo, cena, godiste) {
  let car_filters_data = [];
  let cars_data = getAllCars();

  for (const key in cars_data) {
    let filter_status = true;

    if (izbor !== "sve") {
      if (izbor !== cars_data[key].car_brand) {
        filter_status = false;
      }
    }

    if (model !== "svi") {
      if (model !== cars_data[key].car_model) {
        filter_status = false;
      }
    }

    if (karoserija !== "Karoserija") {
      if (karoserija !== cars_data[key].car_type.toLowerCase()) {
        filter_status = false;
      }
    }

    if (gorivo !== "Gorivo") {
      if (gorivo !== cars_data[key].car_fuel.toLowerCase()) {
        filter_status = false;
      }
    }

    if (cena !== "") {
      if (cena < cars_data[key].car_price) {
        filter_status = false;
      }
    }

    if (godiste !== "Godiste do") {
      if (godiste < cars_data[key].car_year) {
        filter_status = false;
      }
    }

    if (filter_status) {
      car_filters_data.push(cars_data[key]);
    }
  }

  return car_filters_data;
}
