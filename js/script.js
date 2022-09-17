// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
//     name: "Молоток",
//     price: 150,
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
//     name: "Перфоратор",
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
//     name: "Рівень",
//     price: 2000,
//   },
// ];

// function createItemMarkup(instruments) {
//   return instruments
//     .map(({ id, img, name, price }) => {
//       return `	<li class="gallery__item"><img src="${img}" alt="${name}" width='70' height='70' data-id='${id}'>
// 		<h2>${name}</h2>
// 		<p>${price}</p>
// 		<button class='js-buy' type="button">Купить</button>
// 		<button class='js-favorite' type="button">Добавить в избранное</button>
// 	</li>`;
//     })
//     .join("");
// }

// const markup = createItemMarkup(instruments);
// const listGallery = document.querySelector(".gallery");

// listGallery.innerHTML = markup;

// listGallery.addEventListener("click", onClickBtn);
// const basket = [];
// const favorite = [];
// function onClickBtn(e) {
//   console.log(e.target.classList);
//   if (e.target.classList.contains("js-favorite")) {
//     const idItem = e.target.closest(".gallery__item").dataset.id;
//     const idInstrument = instruments.find(
//       (instrument) => Number(instrument.id) === Number(idItem)
//     );
//     favorite.push(idInstrument);
//   }

//   if (e.target.classList.contains("js-buy")) {
//     const idItem = e.target.closest(".gallery__item").dataset.id;
//     const idInstrument = instruments.find(
//       (instrument) => Number(instrument.id) === Number(idItem)
//     );
//     busket.push(idInstrument);
//   }
// }

// const markup = createItemMarkup(instruments);

// const galleryRefs = document.querySelector('.gallery');

// galleryRefs.innerHTML = markup;

// galleryRefs.addEventListener('click', onButtonClick);

// const busket = [];

// const favorite = [];

// function onButtonClick(event) {
// 	if (event.target.classList.contains('js-buy-btn')) {
// 		const idItem = Number(event.target.closest('.gallery-item').dataset.id);

// 		const idInstrument = instruments.find(
// 			(instrument) => instrument.id === idItem
// 		);

// 		busket.push(idInstrument);

// 		console.log(busket);
// 	}

// 	if (event.target.classList.contains('js-favorite-btn')) {
// 		const idItem = Number(event.target.closest('.gallery-item').dataset.id);

// 		const idInstrument = instruments.find(
// 			(instrument) => instrument.id === idItem
// 		);

// 		favorite.push(idInstrument);

// 		console.log(favorite);
// 	}
// }
