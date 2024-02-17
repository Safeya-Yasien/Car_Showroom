let toggleMenu = document.querySelector("#toggle-menu");
let menuItems = document.querySelector("#menu-items");

toggleMenu.addEventListener("click", () => {
  menuItems.classList.toggle("show-menu");
});

let bookButton = document.querySelectorAll(".products .book-button");

bookButton.forEach((button) => {
  button.addEventListener("click", displayBookForm);
});

function displayBookForm() {
  let popupOverlay = document.createElement("div");
  popupOverlay.className = "popup-overlay";

  let popupBox = document.createElement("div");
  popupBox.className = "popup-box";

  let closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", closeWindow);

  let createdForm = createBookForm();

  popupBox.appendChild(createdForm);

  popupBox.appendChild(closeButton);

  popupOverlay.appendChild(popupBox);

  document.body.appendChild(popupOverlay);
}

function closeWindow() {
  let popupOverlay = document.querySelector(".popup-overlay");
  popupOverlay.remove();
}

function createBookForm() {
  let bookingContainer = document.createElement("div");
  bookingContainer.className = "booking";

  let bookingForm = document.createElement("form");
  bookingForm.action = "";

  let formHeading = document.createElement("h5");
  formHeading.textContent = "Choose Your Car";

  let formDescription = document.createElement("p");
  formDescription.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nemo totam vitae, quis, impedit blanditiis animi laudantium enim odit iusto laboriosam repellat, ducimus qui cumque ad voluptas id obcaecati eveniet?";

  let personInfo = document.createElement("div");
  personInfo.classList.add("person-info");

  const personName = document.createElement("div");
  personName.classList.add("person-name");
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "your name*");
  inputName.setAttribute("required", "");
  personName.appendChild(inputName);

  const personContact = document.createElement("div");
  personContact.classList.add("person-contact");

  const divEmail = document.createElement("div");
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "e-mail*");
  inputEmail.setAttribute("required", "");
  divEmail.appendChild(inputEmail);

  const divPhone = document.createElement("div");
  const inputPhone = document.createElement("input");
  inputPhone.setAttribute("type", "text");
  inputPhone.setAttribute("placeholder", "phone*");
  inputPhone.setAttribute("required", "");
  divPhone.appendChild(inputPhone);

  personContact.appendChild(divEmail);
  personContact.appendChild(divPhone);

  personInfo.appendChild(personName);
  personInfo.appendChild(personContact);

  const carInfo = document.createElement("div");
  carInfo.classList.add("car-info");

  const selectColor = document.createElement("select");
  const optionColorDefault = document.createElement("option");
  optionColorDefault.textContent = "Car Color";
  optionColorDefault.setAttribute("disabled", "");
  optionColorDefault.setAttribute("selected", "");
  selectColor.appendChild(optionColorDefault);
  const colors = ["Red", "Black", "Gray"];
  colors.forEach((color) => {
    const optionColor = document.createElement("option");
    optionColor.textContent = color;
    selectColor.appendChild(optionColor);
  });

  const selectModel = document.createElement("select");
  const optionModelDefault = document.createElement("option");
  optionModelDefault.textContent = "Car Model";
  optionModelDefault.setAttribute("disabled", "");
  optionModelDefault.setAttribute("selected", "");
  selectModel.appendChild(optionModelDefault);
  const models = ["Sedan", "Suv", "Sport Cars"];
  models.forEach((model) => {
    const optionModel = document.createElement("option");
    optionModel.textContent = model;
    selectModel.appendChild(optionModel);
  });

  carInfo.appendChild(selectColor);
  carInfo.appendChild(selectModel);

  const confirm = document.createElement("div");
  confirm.classList.add("confirm");

  const buttonConfirm = document.createElement("button");
  buttonConfirm.setAttribute("type", "button");
  buttonConfirm.textContent = "Confirms";

  confirm.appendChild(buttonConfirm);

  bookingForm.appendChild(formHeading);
  bookingForm.appendChild(formDescription);
  bookingForm.appendChild(personInfo);
  bookingForm.appendChild(carInfo);
  bookingForm.appendChild(confirm);

  bookingContainer.appendChild(bookingForm);

  return bookingContainer;
}
