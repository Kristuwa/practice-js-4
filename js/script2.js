const cars = [
  {
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    car: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%2528facelift%2529%252C_front_11.30.21.jpg",
  },
  {
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const formRef = document.querySelector(".js-register-form");
const listCar = document.querySelector(".container");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  //   console.log(e.target);
  //   console.log(e.target.elements.byValue);
  //   console.log(e.target.elements.name);

  const searchValue = e.target.elements.byValue.value;
  const searchName = e.target.elements.name.value.trim();

  let findCars;

  if (searchValue === "price") {
    findCars = cars.filter((car) => car[searchValue] === Number(searchName));
  } else {
    findCars = cars.filter(
      (car) => car[searchValue].toLowerCase() === searchName.toLowerCase()
    );
  }

  const markup = findCars
    .map(({ car, type, price, img }) => {
      return `	<li class="gallery__item"><img src="${img}" alt="${car}" width='70' height='70'>
		<h2>Марка: ${car}</h2>
		<p>Тип: ${type}</p>
	<p>Цена: ${price}</p>
	</li>`;
    })
    .join("");

  listCar.innerHTML = markup;
}
