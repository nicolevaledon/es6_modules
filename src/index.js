import WishList from "./wishlist.js";
console.log("Hello World");

// TODO
const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-model");
const carYearPara = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishlistUl = document.querySelector("#wishListContainer > ul");

const wishlist = new WishList();

submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
  carMakePara.textContent = car.make;
  carModelPara.textContent = car.model;
  carYearPara.textContent = car.year;

  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}
function updateDomList() {
  wishlistUl.innerHTML = "";

  wishlist.list.forEach((car) => {
    const tempListItem = document.createElement("li");
    tempListItem.textContent = `${car.make} : ${car.model}`;
    tempListItem.addEventListener("click", () => {
      showCarDetails(car);
    });
    wishlistUl.append(tempListItem);
  });
}

function addCar(event) {
  event.preventDefault();
  wishlist.add(makeInput.value, modelInput.value, yearInput.value);
  updateDomList();
}

function removeCar() {
  const CarId = removeBtn.getAttribute("data-carId");
  wishlist.remove(CarId);
  updateDomList();
  carMakePara.textContent = "";
  carModelPara.textContent = "";
  carYearPara.textContent = "";

  removeBtn.disabled = true;
}
